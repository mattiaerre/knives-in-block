import { useState } from 'react';
import classNames from 'classnames';

export const blue = 'blue';
export const turquoise = 'turquoise';
export const white = 'white';

export function Knife({ handleOnClickKnife, isSelected, knife }) {
  const [selected, setSelected] = useState(isSelected);

  function handleOnClick(e) {
    setSelected(!selected);
    handleOnClickKnife(e);
  }

  return (
    <li
      className={classNames({ disabled: selected }, 'knife', knife)}
      onClick={handleOnClick}
    />
  );
}

// A knife can be put down, picked up, and inserted into the block
// State machine: Down <-> Up <-> Block
