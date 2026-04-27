import { useState } from 'react';

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section className="counter">
      <h2>
        {title}
      </h2>
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
