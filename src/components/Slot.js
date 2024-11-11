import { BLACK, EMPTY, FULL } from './constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slot.module.css';
import { useState } from 'react';

export default function Slot({ dispatch, id, onClick }) {
  const [knife, setKnife] = useState(null);
  const [state, setState] = useState(EMPTY);

  function handleOnClick() {
    const _knife = onClick();
    if (state === EMPTY && _knife) {
      setKnife(_knife);
      setState(FULL);
      return dispatch({
        type: 'slot_place_knife',
        value: { id: id, knife: _knife }
      });
    }
  }

  return (
    <div
      className={classNames(styles[state], styles.slot)}
      data-testid="slot"
      onClick={handleOnClick}
      style={{ backgroundColor: knife ? knife.color : BLACK }}
    ></div>
  );
}

Slot.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
