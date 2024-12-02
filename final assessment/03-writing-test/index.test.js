const test = require('node:test');
const assert = require('node:assert');
const sum = require('./index');

test('Testing sum function', (t) => {
  
  t.test('Adding two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  });

  
  t.test('Adding two negative numbers', () => {
    assert.strictEqual(sum(-2, -3), -5, '-2 + -3 should equal -5');
  });

 
  t.test('Adding zero to a number', () => {
    assert.strictEqual(sum(0, 5), 5, '0 + 5 should equal 5');
  });
});
