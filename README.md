# JSDoc Plugins

A collection of custom plugins for JSDoc.

## Plugins

`task.js`

We use [`gulp-help-doc`](https://www.npmjs.com/package/gulp-help-doc) to document our build pipeline.
We also use [`gulp-jsdoc3`](https://www.npmjs.com/package/gulp-jsdoc3) to document our JavaScript.
`task.js` registers a new tag with JSDoc that parses the `{task}` annotation and outputs the description.

### Usage

* Add the [plugin](http://usejsdoc.org/about-plugins.html)
to your JSDoc `plugins` array: `'./node_modules/jsdoc-plugins/task'`.
* We created a new task to document the build process specifically:

```js
  gulp.task('gulpdoc', (cb) => {
    gulp
      .src([
        './gulp/README.md',
        './gulp/**/*.js'
      ])
      .pipe(jsdoc({
        opts: {destination: 'docs/gulp'},
        plugins: ['./node_modules/jsdoc-plugins/task']
      }, cb));
  })
```
