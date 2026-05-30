import { describe, test, expect } from 'vitest';

describe('Math Utility Unit Test', (): void => {
  test('should add two numbers', (): void => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });
});
