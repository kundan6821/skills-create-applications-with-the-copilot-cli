#!/usr/bin/env node

// calculator.js
// Supported operations:
// - addition (add or +)
// - subtraction (sub or -)
// - multiplication (mul or * or x)
// - division (div or /)

// Export compute(op, a, b) for programmatic use and provide CLI when invoked directly.

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
    default:
      throw new Error('Unknown operation');
  }
}

if (require.main === module) {
  // CLI entrypoint
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

  try {
    const result = compute(op, a, b);
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
}

module.exports = { compute };
