import { DOWN, UP } from '../models/constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Knife.module.css';
import { useState } from 'react';

export default function Knife({ color, dispatch, id }) {
  const [state, setState] = useState(DOWN);

  function handleOnClick() {
    if (state === DOWN) {
      setState(UP);
      return dispatch({ type: 'knife_pick_up', value: id });
    }
    if (state === UP) {
      setState(DOWN);
      return dispatch({ type: 'knife_put_down', value: null });
    }
  }

  return (
    <div
      className={classNames(styles[state], styles.knife)}
      data-testid="knife"
      onClick={handleOnClick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

Knife.propTypes = {
  color: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
