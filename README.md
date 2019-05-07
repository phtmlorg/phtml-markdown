# pHTML Markdown [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Markdown] lets you write markdown in HTML.

```html
<h1 markdown>pHTML **Markdown**</h1>
<div markdown>
  ### Make it clear.

  Integrate this love and fear.
  
  Still hopelessly hopeful.

  Wounded child seeking wonderful.
</div>

<!-- becomes -->

<h1>pHTML <strong>Markdown</strong></h1>
<div>
  <h3 id="make-it-clear">Make it clear.</h3>
  <p>Integrate this love and fear.</p>
  <p>Still hopelessly hopeful.</p>
  <p>Wounded child seeking wonderful.</p>
</div>
```

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/markdown
```

### Node

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

| [Node](INSTALL.md#node) | [CLI](INSTALL.md#phtml-cli) | [Eleventy](INSTALL.md#eleventy) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### attr

The `attr` option defines attributes used to trigger Markdown parsing. By
default, content of elements using `md` or `markdown` attributes are parsed as
Markdown.

```js
// parse the content of elements with a data-markdown attribute
phtmlMarkdown({ attr: 'data-markdown' })

// parse the content of elements with data-markdown or data-md attributes
phtmlMarkdown({ attr: ['data-markdown', 'data-md'] })
```

```html
<body data-markdown>
  # You say you want a revolution
</body>
```

```html
<body>
  <h1>You say you want a revolution</h1>
</body>
```

### removeAttr

The `removeAttr` option defines attributes used to trigger Markdown parsing
that should also be removed. By default, whichever attributes are passed to
`attr` are used. You might use this if the attribute you are using will also
be used by the browser or another plugin.

```js
// remove the md attribute from elements with data-content or md attributes
phtmlMarkdown({ attr: ['data-content', 'md'], removeAttr: 'md' })
```

```html
<p data-markdown>
  You say you want a **revolution**.
</p>
<p md>
  Well, you _know_.
</p>
```

```html
<p data-markdown>
  You say you want a <strong>revolution</strong>.
</p>
<p>
  Well, you <em>know</em>.
</p>
```

### marked

The `marked` option defines options passed into
[marked](https://marked.js.org/#/USING_ADVANCED.md#options).

```js
phtmlMarkdown({ marked: { headerIds: false } })
```

```html
<body markdown>
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
