import { EMPTY, FULL, UP } from './constants';

function makeSlot() {
  let _knife = null;

  return {
    // command
    place: (knife) => {
      if (knife.state() === UP) {
        knife.putDown();
        _knife = knife;
      } else {
        throw new Error('You must pick up a knife first');
      }
    },
    // command
    remove: () => {
      if (_knife) {
        _knife.pickUp();
        _knife = null;
      } else {
        throw new Error('The slot is already empty');
      }
    },
    // query
    state: () => (_knife ? FULL : EMPTY)
  };
}

export default makeSlot;
