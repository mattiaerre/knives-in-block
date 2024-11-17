import { BLOCK } from './constants';
import PropTypes from 'prop-types';
import Slot from './Slot';
import classNames from 'classnames';
import computeBorderColor from './computeBorderColor';

export default function KnivesOrBlocks({ end, onClick, slots, start, type }) {
  return (
    <ul
      className={classNames(type)}
      style={{ borderColor: type === BLOCK ? computeBorderColor(slots) : null }}
    >
      {Object.keys(slots)
        .slice(start, end)
        .map((id) => {
          return (
            <li key={id}>
              <Slot id={id} knife={slots[id]} onClick={onClick} />
            </li>
          );
        })}
    </ul>
  );
}

KnivesOrBlocks.propTypes = {
  end: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  slots: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};
