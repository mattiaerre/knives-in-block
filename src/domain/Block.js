export const empty = 'empty';

export const emptyBlock = [
  [empty, empty, empty],
  [empty, empty, empty]
];

export function Block(initialBlock = emptyBlock) {
  // it's a 2x3 matrix
  const _block = initialBlock;

  return {
    // query
    current: () => {
      return _block;
    },
    // command
    place: (knife, x, y) => {
      _block[x][y] = knife;
    },
    // command
    remove: (x, y) => {
      _block[x][y] = empty;
    }
  };
}
