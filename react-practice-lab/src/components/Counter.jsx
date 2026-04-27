import { useState } from 'react';

const Counter = ({ title, initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prev) => prev + step);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section className="counter">
      <h2>{title}</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-actions">
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
