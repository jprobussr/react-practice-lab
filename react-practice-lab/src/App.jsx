import { useState } from 'react';
import Counter from './components/Counter.jsx';
import './App.css';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  const handleCount1Increment = () => {
    setCount1((prev) => prev + 1);
  };

  const handleCount1Decrement = () => {
    setCount1((prev) => prev - 1);
  };

  const handleCount1Reset = () => {
    setCount1(0);
  };

  const handleCount2Increment = () => {
    setCount2((prev) => prev + 1);
  };

  const handleCount2Decrement = () => {
    setCount2((prev) => prev - 1);
  };

  const handleCount2Reset = () => {
    setCount2(0);
  };

  const counters = [
    {
      id: 1,
      title: 'Passenger Counter',
      count: count1,
      onIncrement: handleCount1Increment,
      onDecrement: handleCount1Decrement,
      onReset: handleCount1Reset,
    },
    {
      id: 2,
      title: 'Student Counter',
      count: count2,
      onIncrement: handleCount2Increment,
      onDecrement: handleCount2Decrement,
      onReset: handleCount2Reset,
    },
  ];

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
              onIncrement={counter.onIncrement}
              onDecrement={counter.onDecrement}
              onReset={counter.onReset}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
