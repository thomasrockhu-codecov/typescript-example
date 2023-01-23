import { add, subtract } from './calculator'

test('add function', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract function', () => {
  expect(subtract(1, 2)).toBe(-1);
});
