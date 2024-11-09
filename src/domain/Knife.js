import classNames from 'classnames';
import { useState } from 'react';
import './Knife.css';

export default function Knife({ color }) {
  const states = { down: 'down', slot: 'slot', up: 'up' };

  const [state, setState] = useState(states.down);

  function handleOnClick() {
    if (state === states.down) {
      setState(states.up);
    }
    if (state === states.up) {
      setState(states.down);
    }
  }

  return (
    <div
      className={classNames(color, 'knife', state)}
      data-testid="knife"
      onClick={handleOnClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}
