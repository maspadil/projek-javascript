const test = require('node:test');
const assert = require('node:assert');
const sum = require('./index');

// Grup pengujian untuk fungsi sum
test('Testing sum function', (t) => {
  // Skenario 1: Dua bilangan positif
  t.test('Two positive numbers', () => {
    assert.strictEqual(sum(5, 7), 12, '5 + 7 should equal 12');
  });

  // Skenario 2: Satu bilangan positif dan satu negatif
  t.test('One positive and one negative number', () => {
    assert.strictEqual(sum(10, -3), 7, '10 + -3 should equal 7');
  });

  // Skenario 3: Dua bilangan negatif
  t.test('Two negative numbers', () => {
    assert.strictEqual(sum(-4, -6), -10, '-4 + -6 should equal -10');
  });

  // Skenario 4: Salah satu bilangan adalah nol
  t.test('Adding zero', () => {
    assert.strictEqual(sum(0, 8), 8, '0 + 8 should equal 8');
    assert.strictEqual(sum(8, 0), 8, '8 + 0 should equal 8');
  });

  // Skenario 5: Nilai tidak valid
  t.test('Invalid inputs', () => {
    assert.throws(() => sum('5', 3), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'String input should throw TypeError');

    assert.throws(() => sum(undefined, 2), {
      name: 'TypeError',
      message: 'Invalid input'
    }, 'Undefined input should throw TypeError');
  });
});
