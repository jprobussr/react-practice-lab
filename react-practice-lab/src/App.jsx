import { useState } from 'react';
import Counter from './components/Counter.jsx';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  const handleIncrement = () => {
    setCount1((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount1((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount1(0);
  };

  const handleIncrement1 = () => {
    setCount2((prev) => prev - 5);
  };

  const handleDecrement1 = () => {
    setCount2((prev) => prev - 5);
  };

  const handleReset1 = () => {
    setCount2(10);
  };

  return (
    <main>
      <h1>React Practice Lab</h1>

      <div className="counter-list">
        <Counter
          title="Code Counter 💡"
          count={count1}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />

        <Counter
          title="Passenger Counter"
          count={count2}
          onIncrement={handleIncrement1}
          onDecrement={handleDecrement1}
          onReset={handleReset1}
        />
      </div>
    </main>
  );
};

export default App;
