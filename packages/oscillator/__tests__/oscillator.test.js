'use strict';

const oscillator = require('..');
const assert = require('assert').strict;

assert.strictEqual(oscillator(), 'Hello from oscillator');
console.info('oscillator tests passed');
