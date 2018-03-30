'use strict';

const nodeVersion = parseInt(process.version.substring(1));

console.log('nodeVersion:', nodeVersion);
console.log('WEBPACK_VERSION:', process.env.WEBPACK_VERSION);

if (nodeVersion < 6 && process.env.WEBPACK_VERSION === '4') {
  console.log('Webpack v4 Tests Cannot Run on Node v4');
} else {
  require('./base');
  require('./lib/lint-dirty-modules-plugin');
}
