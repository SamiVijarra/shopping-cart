import { describe, expect, test } from 'vitest';
import { add, divide, multiply, substract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1;
    const b = 3;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {

  
  test('should subtract two negarive numbers', () => {
    // ! 1. Arrange
    const a = -10;
    const b = -5;

    // ! 2. Act
    const result = substract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {

  test('should multiply two positives numbers', () => {
    // ! 1. Arrange
    const a = 4;
    const b = 5;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });

  test('should multiply two negatives numbers', () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});


describe('divide', () => {

  test('should divide two positives numbers', () => {
    const a = 4;
    const b = 5;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });

});