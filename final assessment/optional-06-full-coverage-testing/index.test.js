const test = require('node:test');
const assert = require('node:assert');
const sum = require('./index');  
test('Testing sum function', (t) => {

  
  t.test('Adding two positive numbers', () => {
    assert.strictEqual(sum(5, 7), 12, '5 + 7 should equal 12');
  });

  
  t.test('Adding one positive and one negative number', () => {
    assert.strictEqual(sum(10, -3), 7, '10 + (-3) should equal 7');
  });

  
  t.test('Adding two negative numbers', () => {
    assert.strictEqual(sum(-4, -6), -10, '-4 + (-6) should equal -10');
  });

  t.test('Adding zero', () => {
    assert.strictEqual(sum(0, 8), 8, '0 + 8 should equal 8');
    assert.strictEqual(sum(8, 0), 8, '8 + 0 should equal 8');
  });

  
  t.test('Invalid input - string', () => {
    assert.throws(() => sum('5', 3), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'String input should throw TypeError');
  });

  
  t.test('Invalid input - undefined', () => {
    assert.throws(() => sum(undefined, 2), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'Undefined input should throw TypeError');
  });

  
  t.test('Invalid input - null', () => {
    assert.throws(() => sum(null, 3), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'Null input should throw TypeError');
  });

 
  t.test('Invalid input - object', () => {
    assert.throws(() => sum({}, 3), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'Object input should throw TypeError');
  });
});
