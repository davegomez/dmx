module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-core/browser-polyfill.js',
      'tests/**/*.spec.js'
    ],
    plugins: ['karma-webpack', 'karma-mocha', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/, exclude: /(bower_components|node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /sinon.*\.js$/,
            loader: 'imports?define=>false'
          }
        ],
        postLoaders: [{
          test: /\.js$/, exclude: /(node_modules|bower_components|tests)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
