import { expect, test } from 'vitest';
import { lineTotal } from './cart';

test('calculates the total for an ordinary purchase', () => {
  expect(lineTotal(120, 3)).toBe(360);
});

test('returns zero when the quantity is zero', () => {
  expect(lineTotal(120, 0)).toBe(0);
});
