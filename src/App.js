import './App.css';
import { BLOCK, DOWN, KNIVES, UP } from './components/constants';
import PropTypes from 'prop-types';
import Slot from './components/Slot';
import classNames from 'classnames';
import { useReducer } from 'react';

const initialSlots = {
  s1: { color: 'blue', id: 'k1', state: DOWN },
  s2: { color: 'blue', id: 'k2', state: DOWN },
  s3: { color: 'turquoise', id: 'k3', state: DOWN },
  s4: { color: 'turquoise', id: 'k4', state: DOWN },
  s5: { color: 'white', id: 'k5', state: DOWN },
  s6: { color: 'white', id: 'k6', state: DOWN },
  s7: null,
  s8: null,
  s9: null,
  s10: null,
  s11: null,
  s12: null
};

const initialArg = {
  block: null,
  knife: null,
  slot: null,
  slots: initialSlots
};

function reducer(state, action) {
  switch (action.type) {
    case 'knife_pick_up': {
      return {
        ...state,
        slot: action.value,
        slots: {
          ...state.slots,
          [action.value.id]: { ...action.value.knife, state: UP }
        }
      };
    }
    case 'knife_put_down': {
      return {
        ...state,
        slots: {
          ...state.slots,
          [state.slot.id]: null,
          [action.value.id]: { ...state.slot.knife, state: DOWN }
        },
        slot: null
      };
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  function handleOnClick(slot) {
    if (state.slot === null && slot.knife === null) {
      return console.log('Noops');
    }
    if (state.slot === null && slot.knife !== null) {
      return dispatch({ type: 'knife_pick_up', value: slot });
    }
    if (
      (state.slot !== null && slot.knife === null) ||
      state.slot.id === slot.id
    ) {
      return dispatch({ type: 'knife_put_down', value: slot });
    }
    if (state.slot !== null && slot.knife !== null) {
      return console.log('The target slot is already full');
    }
    throw Error('Oops!');
  }

  function KnivesOrBlocks({ end, start, type }) {
    return (
      <ul className={classNames(type)} style={{ borderColor: 'gray' }}>
        {Object.keys(state.slots)
          .slice(start, end)
          .map((id) => {
            return (
              <li key={id}>
                <Slot id={id} knife={state.slots[id]} onClick={handleOnClick} />
              </li>
            );
          })}
      </ul>
    );
  }

  KnivesOrBlocks.propTypes = {
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  };

  return (
    <main>
      <h1 className="source-sans-3-700">Jean Dubost</h1>
      <h2 className="source-sans-3-500">
        Laguiole Set of 6 Steak Knives in Block
      </h2>
      <section>
        <h3 className="source-sans-3-500">Knives</h3>
        <KnivesOrBlocks end={6} start={0} type={KNIVES} />
      </section>
      <section>
        <h3 className="source-sans-3-500">Block</h3>
        <KnivesOrBlocks end={12} start={6} type={BLOCK} />
      </section>
      <section>
        <h3 className="source-sans-3-500">Rules</h3>
        <p>
          Move knives into blocks to create beautiful patterns. Some are
          allowed, and the block border will turn{' '}
          <span style={{ color: 'green', fontWeight: 'bold' }}>green</span>,
          while others are not, and the block border will turn{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>red</span>. As you
          place the knives, the block border will remain{' '}
          <span style={{ color: 'gray', fontWeight: 'bold' }}>gray</span>.
        </p>
      </section>
    </main>
  );
}

export default App;
