/* eslint-disable */
// jscs: disable

var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      {
        test: /sinon.*\.js$/,
        loader: "imports?define=>false"
      }
    ]
  }
});

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false },
      { pattern: 'node_modules/babel-core/browser-polyfill.js', instrument: false },
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'tests/**/*.spec.js', load: false }
    ],

    testFramework: "mocha",

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        // https://babeljs.io/docs/usage/experimental/
        stage: 0
      })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
