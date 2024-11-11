import './App.css';
import Knife from './components/Knife';
import Slot from './components/Slot';
import { useReducer } from 'react';

const initialArg = { block: null, knifeId: null };

function reducer(state, action) {
  switch (action.type) {
    case 'knife_pick_up': {
      return {
        ...state,
        knifeId: action.value
      };
    }
    case 'knife_put_down': {
      return {
        ...state,
        knifeId: null
      };
    }
    case 'slot_place_knife': {
      return {
        ...state,
        block: action.value,
        knifeId: null
      };
    }
  }
  throw Error(`Unknown action: ${action.type}`);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <main>
      <h1 className="source-sans-3-700">Jean Dubost</h1>
      <h2 className="source-sans-3-500">
        Laguiole Set of 6 Steak Knives in Block
      </h2>
      <section>
        <h3 className="source-sans-3-500">Knives</h3>
        TODO
      </section>
      <section>
        <h3 className="source-sans-3-500">Block</h3>
        TODO
      </section>
      <section>TODO</section>
      <section className="playground">
        <Knife color="blue" dispatch={dispatch} id="k1" />
        <Knife color="red" dispatch={dispatch} id="k2" />
        <Slot dispatch={dispatch} id="s1" knifeId={state.knifeId} />
        <Slot dispatch={dispatch} id="s2" knifeId={state.knifeId} />
      </section>
    </main>
  );
}

export default App;
