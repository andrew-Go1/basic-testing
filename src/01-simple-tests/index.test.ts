// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const culcResult = simpleCalculator({ a: 1, b: 2, action: Action.Add });
    expect(culcResult).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const culcResult = simpleCalculator({ a: 1, b: 2, action: Action.Subtract });
    expect(culcResult).toBe(-1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
  });

  test('should divide two numbers', () => {
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
