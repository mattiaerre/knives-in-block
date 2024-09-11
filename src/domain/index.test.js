import { empty, Block } from './Block';
import { blue, turquoise, white } from './Knife';

// given when then
// arrange act assert
// given an empty block place the first knife

test('snapshot', () => {
  const block = Block();
  block.place(turquoise, 1, 2);

  expect(block.current()).toMatchSnapshot();
});

test('place white', () => {
  const block = Block();
  block.place(white, 0, 0);

  expect(block.current()[0][0]).toEqual(white);
});

test('place blue', () => {
  const block = Block();
  block.place(blue, 0, 0);

  expect(block.current()[0][0]).toEqual(blue);
});

test('remove white', () => {
  const block = Block();
  block.place(white, 0, 1);
  block.remove(0, 1);

  expect(block.current()[0][1]).toEqual(empty);
});
