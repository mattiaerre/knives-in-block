import { blue, empty, turquoise, white } from './index';

function Block() {
  // it's a 2x3 matrix

  const block = [
    [empty, empty, empty],
    [empty, empty, empty]
  ];
  return {
    current: () => {
      return block;
    },
    place: (knife, x, y) => {
      block[x][y] = knife;
    }
  };
}

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

  expect(white).toEqual(block.current()[0][0]);
});

test('place blue', () => {
  const block = Block();
  block.place(blue, 0, 0);

  expect(blue).toEqual(block.current()[0][0]);
});
