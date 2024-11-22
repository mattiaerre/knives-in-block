import { GREEN, LIGHTGRAY, RED } from './constants';

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

function smallX(block, slots) {
  // little X example
  // | b | t | - |
  // |---|---|---|
  // | t | b | - |

  // block: [ 's7', 's8', 's9', 's10', 's11', 's12' ]
  const s7 = slots[block[0]];
  const s8 = slots[block[1]];
  const s10 = slots[block[3]];
  const s11 = slots[block[4]];
  if (!s7 || !s8 || !s10 || !s11) {
    return false;
  }
  if (s7.color === s11.color && s8.color === s10.color) {
    return true;
  }
  return false;
}

function bigX(block, slots) {
  // big X example
  // | b | - | w |
  // |---|---|---|
  // | w | - | b |

  // block: [ 's7', 's8', 's9', 's10', 's11', 's12' ]
  const s7 = slots[block[0]];
  const s9 = slots[block[2]];
  const s10 = slots[block[3]];
  const s12 = slots[block[5]];
  if (!s7 || !s9 || !s10 || !s12) {
    return false;
  }
  if (s7.color === s12.color && s9.color === s10.color) {
    return true;
  }
  return false;
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

  if (smallX(block, slots)) {
    return RED;
  }

  if (bigX(block, slots)) {
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
