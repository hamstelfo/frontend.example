import {suma} from './sum';

console.log("popopo");
console.log(suma);

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});