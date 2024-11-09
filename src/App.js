import { useState } from 'react';
import './App.css';
import { empty, emptyBlock } from './domain/Block';
import { blue, turquoise, white, Knife } from './tmp/Knife';
import NewKnife from './domain/Knife';

const knives = [
  [blue, turquoise, white],
  [blue, turquoise, white]
];

function App() {
  const [block, setBlock] = useState(emptyBlock);
  const [knife, setKnife] = useState(empty);
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);

  function handleOnClickKnife({ target: { className } }) {
    const color = className.split(' ')[1];
    setKnife(color);
  }

  function handleOnClickReset() {
    setBlock(emptyBlock);
    setKnife(empty);
    setX(-1);
    setY(-1);
  }

  function handleOnClickSlot({ target: { className } }) {
    const x = className.split(' ')[2];
    const y = className.split(' ')[3];
    setX(parseInt(x, 0));
    setY(parseInt(y, 0));
    // this is the main logic
    setBlock((previous) => {
      const next = JSON.parse(JSON.stringify(previous));
      next[x][y] = knife;
      return next;
    });
  }

  return (
    <main>
      <h1 className="source-sans-3-700">Jean Dubost</h1>
      <h2 className="source-sans-3-500">
        Laguiole Set of 6 Steak Knives in Block
      </h2>
      <section className="knives">
        <h3 className="source-sans-3-500">Knives</h3>
        {knives.map((row, x) => {
          return (
            <ul className="row" key={`${x}`}>
              {row.map((knife, y) => {
                return (
                  <Knife
                    isSelected={false}
                    key={`${x}${y}`}
                    knife={knife}
                    handleOnClickKnife={handleOnClickKnife}
                  />
                );
              })}
            </ul>
          );
        })}
      </section>
      <section className="block">
        <h3 className="source-sans-3-500">Block</h3>
        {block.map((row, x) => {
          return (
            <ul className="row" key={`${x}`}>
              {row.map((slot, y) => {
                return (
                  <li
                    className={`slot ${slot} ${x} ${y}`}
                    key={`${x}${y}`}
                    onClick={handleOnClickSlot}
                  />
                );
              })}
            </ul>
          );
        })}
      </section>
      <section className="debug">
        <button onClick={handleOnClickReset}>Reset</button>
        <small>Block: {JSON.stringify(block, 0, 2)}</small>
        <small>Selected knife: {knife}</small>
        <small>Block x: {x}</small>
        <small>Block y: {y}</small>
      </section>
      <section className="playground">
        <NewKnife color="yellow" />
      </section>
    </main>
  );
}

export default App;
