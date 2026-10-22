import './App.css';
import Array01 from './exercises/arrays/Array01.jsx';

const App = () => {
  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">React + JavaScript Practice Lab</h1>

        <p className="app__description">
          Practicing JavaScript fundamentals through React exercises.
        </p>
      </header>

      <section className="exercise">
        <h2>Exercise 01: JavaScript Arrays</h2>
        <Array01 />
      </section>
    </main>
  );
};

export default App;
