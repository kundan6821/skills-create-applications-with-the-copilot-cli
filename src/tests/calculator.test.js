const { compute } = require('../calculator');

describe('calculator compute()', () => {
  test('addition using add', () => {
    expect(compute('add', 2, 3)).toBe(5);
  });

  test('addition using +', () => {
    expect(compute('+', 2, 3)).toBe(5);
  });

  test('subtraction using sub', () => {
    expect(compute('sub', 10, 4)).toBe(6);
  });

  test('subtraction using -', () => {
    expect(compute('-', 10, 4)).toBe(6);
  });

  test('multiplication using mul', () => {
    expect(compute('mul', 45, 2)).toBe(90);
  });

  test('multiplication using *', () => {
    expect(compute('*', 4.5, 2)).toBe(9);
  });

  test('multiplication using x', () => {
    expect(compute('x', 3, 3)).toBe(9);
  });

  test('division using div', () => {
    expect(compute('div', 20, 5)).toBe(4);
  });

  test('division using /', () => {
    expect(compute('/', 7, 2)).toBeCloseTo(3.5);
  });

  test('division by zero throws', () => {
    expect(() => compute('div', 1, 0)).toThrow('Division by zero');
  });

  test('unknown operation throws', () => {
    expect(() => compute('pow', 2, 3)).toThrow('Unknown operation');
  });
});
