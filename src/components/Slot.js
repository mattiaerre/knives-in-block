import { EMPTY, FULL } from '../models/constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slot.module.css';
import { useState } from 'react';

export default function Slot({ dispatch, id, knifeId }) {
  const [state, setState] = useState(EMPTY);

  function handleOnClick() {
    if (state === EMPTY && knifeId) {
      setState(FULL);
      return dispatch({
        type: 'slot_place_knife',
        value: { knifeId: knifeId, slotId: id }
      });
    }
  }

  return (
    <div
      className={classNames(styles.slot)}
      data-testid="slot"
      onClick={handleOnClick}
    ></div>
  );
}

Slot.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  knifeId: PropTypes.string
};
