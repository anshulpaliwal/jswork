
const reverseStr = require("./reverseStr");

test('the function exists', () => {
  expect(reverseStr).toBeDefined();
});

test('String reverses', () => {
  expect(reverseStr('yolo')).toEqual('oloy');
});

test('String reverses with uppercase', () => {
  expect(reverseStr('Yolo')).toEqual('oloy');
});