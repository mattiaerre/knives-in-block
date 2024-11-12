import { GREEN, LIGHTGRAY } from './components/constants';

function computeBorderColor(slots) {
  const howMany = Object.keys(slots).reduce(
    (accumulator, currentValue, index) => {
      if (index >= 6) {
        if (slots[currentValue]) {
          accumulator += 1;
        }
      }
      return accumulator;
    },
    0
  );
  if (howMany === 6) {
    return GREEN;
  }
  return LIGHTGRAY;
}

export default computeBorderColor;
