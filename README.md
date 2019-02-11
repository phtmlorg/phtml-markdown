# pHTML Markdown [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Markdown] lets you write markdown in HTML.

```html
<h1 md>
  PostCSS **Markdown**
</h1>
<div md>
  Make it clear.

  Integrate this love and fear.
  
  Still hopelessly hopeful.

  Wounded child seeking wonderful.
</div>

<!-- becomes -->

<h1>
  PostCSS <strong>Markdown</strong>
</h1>
<div><p>Make it clear.</p>
<p>Integrate this love and fear.</p>
<p>Still hopelessly hopeful.</p>
<p>Wounded child seeking wonderful.</p></div>
```

## Usage

Add [pHTML Markdown] to your project:

```bash
npm install @phtml/markdown --save-dev
```

Use [pHTML Markdown] to process your HTML:

```js
const phtmlMarkdown = require('@phtml/markdown');

phtmlMarkdown.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlMarkdown = require('@phtml/markdown');

phtml([
  phtmlMarkdown(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML Markdown] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### marked

The `marked` option passes options into [marked](https://marked.js.org/#/USING_ADVANCED.md#options).

```js
phtmlMarkdown({
  marked: {
    headerIds: false
  }
})
```

```html
<body md>
  # You say you want a revolution
</body>
```

```html
<body>
  <h1>You say you want a revolution</h1>
</body>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-markdown.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-markdown
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/markdown.svg
[npm-url]: https://www.npmjs.com/package/@phtml/markdown

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Markdown]: https://github.com/phtmlorg/phtml-markdown
