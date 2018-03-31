'use strict';

var StyleLintPlugin = require('../../');
var webpack = require('./webpack');

var configFilePath = getPath('./.stylelintrc');

var baseConfig = {
  entry: './index',
  output: {
    path: getPath('output')
  },
  plugins: [
    new StyleLintPlugin({
      configFile: configFilePath
    })
  ]
};

if (typeof webpack.LoaderOptionsPlugin === 'undefined') {
  baseConfig.debug = false;
} else {
  baseConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: false
    })
  );
}

if (process.env.WEBPACK_VERSION === '4') {
  baseConfig.mode = 'development';
}

module.exports = baseConfig;
