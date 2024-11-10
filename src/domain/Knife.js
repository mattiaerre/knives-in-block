import { DOWN, UP } from '../models/constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import makeKnife from '../models/makeKnife';
import styles from './Knife.module.css';
import { useState } from 'react';

export default function Knife({ color }) {
  const knife = makeKnife(color);
  const [state, setState] = useState(knife.state());

  function handleOnClick() {
    if (state === DOWN) {
      knife.pickUp();
    }
    if (state === UP) {
      knife.putDown();
    }
    setState(knife.state());
  }

  return (
    <div
      className={classNames(styles[state], styles.knife)}
      data-testid="knife"
      onClick={handleOnClick}
      style={{ backgroundColor: knife.color }}
    ></div>
  );
}

Knife.propTypes = {
  color: PropTypes.string.isRequired
};
