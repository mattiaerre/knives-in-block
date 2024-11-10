import './App.css';
import Knife from './domain/Knife';

function App() {
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
        <Knife className="knife" color="blue" />
        <Knife className="knife" color="red" />
        <Knife className="knife" color="yellow" />
        <Knife className="knife" color="blue" />
        <Knife className="knife" color="red" />
        <Knife className="knife" color="yellow" />
      </section>
    </main>
  );
}

export default App;
