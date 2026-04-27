import { useState } from 'react';
import Counter from './components/Counter.jsx';
import './App.css';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, title: 'Passenger Counter', count: 0, step: 1 },
    { id: 2, title: 'Student Counter', count: 10, step: 5 },
  ]);

  const handleIncrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            count: counter.count + counter.step,
          };
        }

        return counter;
      }),
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            count: counter.count - counter.step,
          };
        }

        return counter;
      }),
    );
  };

  const handleReset = (id) => {
    setCounters((prevCounter) =>
      prevCounter.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            count: 0,
          };
        }

        return counter;
      }),
    );
  };

  return (
    <main>
      <h1>React Practice Lab</h1>

      <div className="counter-list">
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              title={counter.title}
              count={counter.count}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
              onReset={() => handleReset(counter.id)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
