import computeBorderColor from './computeBorderColor';

it('Given no knives it should return gray', () => {
  const slots = {
    s1: {
      color: 'blue',
      id: 'k1',
      state: 'down'
    },
    s2: {
      color: 'blue',
      id: 'k2',
      state: 'down'
    },
    s3: {
      color: 'turquoise',
      id: 'k3',
      state: 'down'
    },
    s4: {
      color: 'turquoise',
      id: 'k4',
      state: 'down'
    },
    s5: {
      color: 'white',
      id: 'k5',
      state: 'down'
    },
    s6: {
      color: 'white',
      id: 'k6',
      state: 'down'
    },
    s7: null,
    s8: null,
    s9: null,
    s10: null,
    s11: null,
    s12: null
  };
  const color = computeBorderColor(slots);
  expect(color).toBe('lightgray');
});

it('Given 6 knives it should return green', () => {
  const slots = {
    s1: null,
    s2: null,
    s3: null,
    s4: null,
    s5: null,
    s6: null,
    s7: { color: 'blue', id: 'k1', state: 'down' },
    s8: { color: 'turquoise', id: 'k4', state: 'down' },
    s9: { color: 'white', id: 'k5', state: 'down' },
    s10: { color: 'blue', id: 'k2', state: 'down' },
    s11: { color: 'turquoise', id: 'k3', state: 'down' },
    s12: { color: 'white', id: 'k6', state: 'down' }
  };
  const color = computeBorderColor(slots);
  expect(color).toBe('green');
});
