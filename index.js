const matchers = require('./src/index.js');

if (typeof global.expect == 'undefined') {
    throw new Error('Unable to find Jest\'s global expect. See https://github.com/jest-community/jest-extended#setup for help.');
}

global.expect.extend(matchers);