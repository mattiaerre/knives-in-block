import { DOWN, UP } from './constants';

function makeKnife(color) {
  let _state = DOWN;

  return {
    color: color,
    // command
    pickUp: () => {
      _state = UP;
    },
    // command
    putDown: () => {
      _state = DOWN;
    },
    // query
    state: () => _state
  };
}

export default makeKnife;
