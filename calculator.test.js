const calculator = require('./calculator');

test('adds integers', () => {
  expect(calculator.add(8,2)).toBe(10);
})

// test('adds floats', () => {
//   expect(calculator.add(8,2)).toBe(10);
// })
