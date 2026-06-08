#!/usr/bin/env node

// calculator.js
// Supported operations:
// - addition (add or +)
// - subtraction (sub or -)
// - multiplication (mul or * or x)
// - division (div or /)
// - modulo (mod or %)
// - exponentiation/power (pow or ** or ^)
// - square root (sqrt) - unary operation

// Exported helper functions: compute, modulo, power, squareRoot

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

function compute(op, a, b) {
  const key = String(op).toLowerCase();
  switch (key) {
    case 'add':
    case '+':
      return a + b;
    case 'sub':
    case '-':
      return a - b;
    case 'mul':
    case '*':
    case 'x':
      return a * b;
    case 'div':
    case '/':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    case 'mod':
    case '%':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return modulo(a, b);
    case 'pow':
    case '**':
    case '^':
      return power(a, b);
    case 'sqrt':
      // unary: use `a` as the operand; ignore b if provided
      return squareRoot(a);
    default:
      throw new Error('Unknown operation');
  }
}

if (require.main === module) {
  // CLI entrypoint
  function printUsage() {
    console.error('Usage: node src/calculator.js <operation> <a> <b?>\n');
    console.error('Operations: add(+), sub(-), mul(*,x), div(/), mod(%), pow(**,^), sqrt');
    process.exit(1);
  }

  const [, , op, aStr, bStr] = process.argv;
  if (!op || aStr === undefined) {
    printUsage();
  }

  const a = Number(aStr);
  const b = bStr === undefined ? undefined : Number(bStr);
  if (Number.isNaN(a) || (bStr !== undefined && Number.isNaN(b))) {
    console.error('Error: operands must be valid numbers');
    process.exit(1);
  }

  try {
    const result = compute(op, a, b);
    console.log(result);
    process.exit(0);
  } catch (err) {
    if (err.message === 'Division by zero') {
      console.error('Error: division by zero');
      process.exit(2);
    }
    if (err.message === 'Square root of negative number') {
      console.error('Error: square root of negative number');
      process.exit(3);
    }
    console.error(`Error: ${err.message}`);
    printUsage();
  }
}

module.exports = { compute, modulo, power, squareRoot };
