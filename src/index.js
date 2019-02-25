import marked from 'marked';
import phtml, { Result } from 'phtml';

export default new phtml.Plugin('phtml-markdown', opts => {
	const markdownAttributes = 'attr' in Object(opts)
		? [].concat(opts.attr || [])
	: ['md', 'markdown'];
	const removeMarkdownAttributes = ('removeAttr' in Object(opts)
		? opts.removeAttr === true
			? markdownAttributes
		: opts.removeAttr === false
			? []
		: [].concat(opts.removeAttr || [])
	: markdownAttributes).filter(removeMarkdownAttribute => markdownAttributes.includes(removeMarkdownAttribute));
	const markedOpts = Object(opts).marked;

	marked.setOptions(markedOpts);

	const promises = new WeakMap();

	return {
		Element(node, result) {
			let promise = promises.get(result) || Promise.resolve();
			const hasMarkdownAttribute = markdownAttributes.some(markdownAttribute => node.attrs.contains(markdownAttribute));

			if (hasMarkdownAttribute) {
				const innerHTML = node.sourceInnerHTML;

				// detect the initial indentation
				const indentation = innerHTML.match(/^\n*(\s*)/)[1];
				const indentationRegExp = new RegExp(`\n${indentation}`, 'g');

				// strip the indentation
				const unindentedHTML = innerHTML.replace(indentationRegExp, '\n').trim();

				// parse the document as marked html
				const markedHTML = marked(unindentedHTML).trim();

				// reprocess the marked html as nodes
				promise = promise.then(() => {
					const markedRoot = new Result(markedHTML, { from: node.source.from }).root;

					// conditionally strip the wrapping block when in a strict blocking element
					const shouldStripBlock = stripBlockFromRegExp.test(node.name);
					const hasMultipleNodes = markedRoot.nodes.length > 1;

					const replacementContainer = shouldStripBlock && !hasMultipleNodes
						? markedRoot.first
					: markedRoot;

					// remove the markdown attribute
					removeMarkdownAttributes.forEach(markdownAttribute => {
						node.attrs.remove(markdownAttribute);
					});

					// append the marked nodes
					node.replaceAll(...replacementContainer.nodes);
				});

				promises.set(result, promise);
			}
		},
		Root(root, result) {
			return promises.get(result);
		}
	};
});

const stripBlockFromRegExp = /^(abbr|acronym|b|bdo|big|button|cite|dfn|em|h1|h2|h3|h4|h5|h6|i|input|kbd|p|q|samp|select|small|span|strong|sub|sup|textarea|time|var)$/i;
