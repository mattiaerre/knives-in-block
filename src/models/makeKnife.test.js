import makeKnife from './makeKnife';

test('blue knife', () => {
  const knife = makeKnife('blue');
  expect(knife.color).toBe('blue');
});

test('red knife', () => {
  const knife = makeKnife('red');
  expect(knife.color).toBe('red');
});

test('yellow knife down', () => {
  const knife = makeKnife('yellow');
  expect(knife.color).toBe('yellow');
  expect(knife.state()).toBe('down');
});

test('yellow knife up', () => {
  const knife = makeKnife('yellow');
  knife.pickUp();
  expect(knife.state()).toBe('up');
});

test('yellow knife up then down', () => {
  const knife = makeKnife('yellow');
  knife.pickUp();
  knife.putDown();
  expect(knife.state()).toBe('down');
});
