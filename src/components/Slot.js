import { BLACK, EMPTY } from './constants';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slot.module.css';

export default function Slot({ id, knife, onClick }) {
  return (
    <div
      className={classNames(styles[knife ? knife.state : EMPTY], styles.slot)}
      data-testid={id}
      id={id}
      onClick={() => {
        onClick({ id: id, knife: knife });
      }}
      style={{ backgroundColor: knife ? knife.color : BLACK }}
    ></div>
  );
}

Slot.propTypes = {
  id: PropTypes.string.isRequired,
  knife: PropTypes.object,
  onClick: PropTypes.func.isRequired
};
