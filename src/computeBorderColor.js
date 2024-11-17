import { GREEN, LIGHTGRAY } from './components/constants';

function computeBorderColor(slots) {
  const block = Object.keys(slots).slice(6);

  const howMany = block.reduce((accumulator, currentValue) => {
    if (slots[currentValue]) {
      accumulator += 1;
    }
    return accumulator;
  }, 0);
  if (howMany === 6) {
    return GREEN;
  }

  return LIGHTGRAY;
}

export default computeBorderColor;
