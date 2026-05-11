import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Mouse', price: 24.99, quantity: 1 },
    { id: 2, name: 'Keyboard', price: 49.99, quantity: 2 },
    { id: 3, name: 'USB-C Cable', price: 12.99, quantity: 1 },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });
    });
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercise</p>
        <h1>Shopping Cart</h1>
        <p className="role">
          Practice updating quantities and calculating totals.
        </p>

        <ul className="movie-list">
          {cartItems.map((item) => {
            return (
              <li className="movie-item" key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <small>
                    ${item.price} x {item.quantity}
                  </small>
                </div>

                <div className="quantity-controls">
                  <button
                    className="delete-button"
                    onClick={() => handleDecreaseQuantity(item.id)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>

                  <span className="quantity-value">
                    {item.quantity}
                  </span>

                  <button className="delete-button" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="cart-total">
          Total: ${cartTotal.toFixed(2)}
        </p>
      </section>
    </main>
  );
};

export default App;
