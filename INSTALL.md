# Installing pHTML Markdown

[pHTML Markdown] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML Markdown] to your project:

```bash
npm install @phtmlorg/markdown --save-dev
```

Use [pHTML Markdown] to process your HTML:

```js
const phtmlMarkdown = require('@phtmlorg/markdown')

phtmlMarkdown.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlMarkdown = require('@phtmlorg/markdown')

phtml([
  phtmlMarkdown(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/markdown
```

Alternatively, add [pHTML Markdown] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/markdown', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML Markdown] to your Eleventy project:

```sh
npm install @phtmlorg/markdown @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML Markdown] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlMarkdown = require('@phtmlorg/markdown')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlMarkdown(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML Markdown] to your project:

```bash
npm install @phtmlorg/markdown gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML Markdown] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlMarkdown = require('@phtmlorg/markdown')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlMarkdown(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML Markdown] in your Gruntfile:

```js
const phtmlMarkdown = require('@phtmlorg/markdown')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlMarkdown(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML Markdown]: https://github.com/phtmlorg/phtml-markdown
