const Counter = ({ title, count, onIncrement, onDecrement, onReset }) => {
  return (
    <section className="counter">
      <h2>{title}</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-actions">
        <button onClick={onIncrement}>Increase</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
