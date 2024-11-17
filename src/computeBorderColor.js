import { GREEN, LIGHTGRAY, RED } from './components/constants';

function twoKnivesOfTheSameColorOnTheSameRow(row, slots) {
  const knives = row.reduce((accumulator, currentValue) => {
    if (slots[currentValue]) {
      accumulator.push(slots[currentValue]);
    }
    return accumulator;
  }, []);
  const colors = knives.reduce((accumulator, currentValue) => {
    if (accumulator.includes(currentValue.color)) {
      // Noops
    } else {
      accumulator.push(currentValue.color);
    }
    return accumulator;
  }, []);
  if (colors.length !== knives.length) {
    return true;
  } else {
    return false;
  }
}

function computeBorderColor(slots) {
  const block = Object.keys(slots).slice(6);

  // 2 knives of the same color on the same row
  if (
    twoKnivesOfTheSameColorOnTheSameRow(block.slice(0, 3), slots) || // row 1
    twoKnivesOfTheSameColorOnTheSameRow(block.slice(3), slots) // row 2
  ) {
    return RED;
  }

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
