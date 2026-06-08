const { compute, modulo, power, squareRoot } = require('../calculator');

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
    expect(() => compute('powr', 2, 3)).toThrow('Unknown operation');
  });

  // New tests for extended operations
  test('modulo using mod', () => {
    expect(compute('mod', 5, 2)).toBe(1);
  });

  test('modulo using %', () => {
    expect(compute('%', 10, 3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => compute('mod', 5, 0)).toThrow('Division by zero');
  });

  test('power using pow', () => {
    expect(compute('pow', 2, 3)).toBe(8);
  });

  test('power using ^', () => {
    expect(compute('^', 2, 3)).toBe(8);
  });

  test('power using **', () => {
    expect(compute('**', 3, 3)).toBe(27);
  });

  test('square root of perfect square', () => {
    expect(compute('sqrt', 16)).toBe(4);
  });

  test('square root ignores second operand if provided', () => {
    expect(compute('sqrt', 25, 999)).toBe(5);
  });

  test('square root of negative throws', () => {
    expect(() => compute('sqrt', -9)).toThrow('Square root of negative number');
  });
});

// Also test exported helpers directly
describe('exported helpers', () => {
  test('modulo function', () => {
    expect(modulo(7, 3)).toBe(1);
  });

  test('power function', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('squareRoot function positive', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('squareRoot function negative throws', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number');
  });
});
