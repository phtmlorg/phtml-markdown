module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'attr': {
		message: 'supports { attr } usage',
		options: {
			attr: 'use-markdown'
		}
	},
	'attr:remove': {
		message: 'supports { attr, removeAttr } usage',
		options: {
			attr: ['use-markdown', 'data-md'],
			removeAttr: 'use-markdown'
		}
	},
	'headings': {
		message: 'supports headings usage'
	},
	'headings:options': {
		message: 'supports headings with { marked } usage',
		options: {
			marked: {
				headerIds: false
			}
		}
	}
};
