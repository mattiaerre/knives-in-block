import classNames from 'classnames';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Knife.module.css';

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
      className={classNames(
        color,
        'knife',
        state === states.up ? styles.up : styles.down,
        styles.knife
      )}
      data-testid="knife"
      onClick={handleOnClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

Knife.propTypes = {
  color: PropTypes.string.isRequired
};
