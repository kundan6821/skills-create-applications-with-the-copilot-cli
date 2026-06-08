#!/usr/bin/env node

// calculator.js
// Supported operations:
// - addition (add or +)
// - subtraction (sub or -)
// - multiplication (mul or * or x)
// - division (div or /)

// Usage examples:
//   node src/calculator.js add 2 3    # 5
//   node src/calculator.js / 10 2     # 5

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <a> <b>\n');
  console.error('Operations: add(+), sub(-), mul(*,x), div(/)');
  process.exit(1);
}

const [, , op, aStr, bStr] = process.argv;

if (!op || aStr === undefined || bStr === undefined) {
  printUsage();
}

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(1);
}

function compute(op, a, b) {
  switch (op.toLowerCase()) {
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
    default:
      throw new Error('Unknown operation');
  }
}

try {
  const result = compute(op, a, b);
  // Print result with full precision for floats; trailing zeros are not trimmed intentionally
  console.log(result);
  process.exit(0);
} catch (err) {
  if (err.message === 'Division by zero') {
    console.error('Error: division by zero');
    process.exit(2);
  }
  console.error(`Error: ${err.message}`);
  printUsage();
}
