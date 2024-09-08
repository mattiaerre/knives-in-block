import './App.css';

function App() {
  function onClickHandler(e) {
    console.log(e.target.className);
  }

  return (
    <main>
      <h1 className="source-sans-3-700">Jean Dubost</h1>
      <h2 className="source-sans-3-500">
        Laguiole Set of 6 Steak Knives in Block
      </h2>
      <ul>
        <li className="knife blue" onClick={onClickHandler} />
        <li className="knife turquoise" onClick={onClickHandler} />
        <li className="knife white" onClick={onClickHandler} />
      </ul>
    </main>
  );
}

export default App;
