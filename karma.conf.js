// Karma configuration
// Generated on Wed Aug 02 2017 12:14:07 GMT+0800 (CST)
var webpack = require('webpack');


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
       'tests/*Spec.js': ['babel', 'webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


     // webpack配置
     // 用来预编译源代码的 webpack 配置，基本就是项目的 webpack 配置，但要去掉 entry 属性
    webpack: {
      output: {
        path: __dirname + '/lib',
        filename: '[name].js',
        libraryTarget: 'umd'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
          {
            test: /\.(js)$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: /node_modules/,
            include: /src|packages/,
            enforce: 'post',
            options: {
              esModules: true
            }
          },
          {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            include: /src|packages/,
            enforce: 'pre',
            options: {
              eslint: {
                configFile: '../.eslintrc.json'
              }
            }
          },
          {
            test: /\.vue$/,
            loaders: [{
              loader: 'vue-loader',
              options: {
                // postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']}), px2rem({remUnit: 75})],
                // 为了统计代码覆盖率，对 vue 文件加入 istanbul-instrumenter-loader
                preLoaders: {
                  // js: 'istanbul-instrumenter-loader?esModules=true'
                }
              }
            }]
          },
          {
            test: /\.(scss|sass)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
            loaders: [{
              loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
            }]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
      ]
    }


 })
}
