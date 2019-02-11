# Installing pHTML Markdown

[pHTML Markdown] runs in all Node environments, with special instructions for:

| [Node](#node) | [pHTML CLI](#phtml-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

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

## pHTML CLI

Add [pHTML CLI] to your project:

```bash
npm install phtml-cli --save-dev
```

Use [pHTML Markdown] in your `phtml.config.js` configuration file:

```js
const phtmlMarkdown = require('@phtml/markdown');

module.exports = {
  plugins: [
    phtmlMarkdown(/* pluginOptions */)
  ]
}
```

## Webpack

Add [pHTML Loader] to your project:

```bash
npm install phtml-loader --save-dev
```

Use [pHTML Markdown] in your Webpack configuration:

```js
const phtmlMarkdown = require('@phtml/markdown');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'style-loader',
          { loader: 'html-loader', options: { importLoaders: 1 } },
          { loader: 'phtml-loader', options: {
            ident: 'phtml',
            plugins: () => [
              phtmlMarkdown(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire pHTML] to your project:

```bash
npm install react-app-rewired react-app-rewire-html --save-dev
```

Use [React App Rewire pHTML] and [pHTML Markdown] in your
`config-overrides.js` file:

```js
const reactAppRewirePHTML = require('react-app-rewire-phtml');
const phtmlMarkdown = require('@phtml/markdown');

module.exports = config => reactAppRewirePHTML(config, {
  plugins: () => [
    phtmlMarkdown(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp pHTML] to your project:

```bash
npm install gulp-phtml --save-dev
```

Use [pHTML Markdown] in your Gulpfile:

```js
const phtml = require('gulp-phtml');
const phtmlMarkdown = require('@phtml/markdown');

gulp.task('html', () => gulp.src('./src/*.html').pipe(
  phtml([
    phtmlMarkdown(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [pHTML Markdown] in your Gruntfile:

```js
const phtmlMarkdown = require('@phtml/markdown');

grunt.loadNpmTasks('grunt-phtml');

grunt.initConfig({
  phtml: {
    options: {
      use: [
       phtmlMarkdown(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.html'
    }
  }
});
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML CLI]: https://github.com/phtmlorg/phtml-cli
[pHTML Loader]: https://github.com/phtmlorg/phtml-loader
[pHTML Markdown]: https://github.com/phtmlorg/phtml-markdown
[React App Rewire pHTML]: https://github.com/phtmlorg/react-app-rewire-phtml
[React App Rewired]: https://github.com/timarney/react-app-rewired
