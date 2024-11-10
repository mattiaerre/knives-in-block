import makeKnife from './makeKnife';
import makeSlot from './makeSlot';

test('Given a knife (up) when there is an empty slot, then the knife could be placed', () => {
  const knife = makeKnife('red');
  const slot = makeSlot();
  knife.pickUp();
  expect(knife.state()).toBe('up');
  slot.place(knife);
  expect(slot.state()).toBe('full');
  expect(knife.state()).toBe('down');
});

test('Given a knife (down) when there is a full slot, then the knife could be removed', () => {
  const knife = makeKnife('red');
  const slot = makeSlot();
  knife.pickUp();
  expect(knife.state()).toBe('up');
  slot.place(knife);
  slot.remove();
  expect(slot.state()).toBe('empty');
  expect(knife.state()).toBe('up');
});

test('Given a knife (down) when there is an empty slot, then it throws an error', () => {
  const knife = makeKnife('red');
  const slot = makeSlot();
  expect(() => {
    slot.place(knife);
  }).toThrow('You must pick up a knife first');
});

test('Given an empty slot when trying to remove a knife, then it throws an error', () => {
  const slot = makeSlot();
  expect(() => {
    slot.remove();
  }).toThrow('The slot is already empty');
});
