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
    const culcResult = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Subtract,
    });
    expect(culcResult).toBe(-1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const culcResult = simpleCalculator({
      a: -3,
      b: -2,
      action: Action.Multiply,
    });
    expect(culcResult).toBe(6);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const culcResult = simpleCalculator({
      a: -4,
      b: 2,
      action: Action.Divide,
    });
    expect(culcResult).toBe(-2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const culcResult = simpleCalculator({
      a: -3,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(culcResult).toBe(9);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const culcResult = simpleCalculator({
      a: -3,
      b: 2,
      action: 'invalidAction',
    });
    expect(culcResult).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const culcResult = simpleCalculator({
      a: 'invalidArgumentA',
      b: 'invalidArgumentB',
      action: Action.Add,
    });
    expect(culcResult).toBe(null);
  });
});
