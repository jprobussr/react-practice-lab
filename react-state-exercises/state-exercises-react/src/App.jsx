import { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Phone Charger', isPacked: false },
    { id: 2, name: 'Toothbrush', isPacked: false },
    { id: 3, name: 'Running Shoes', isPacked: false },
  ]);

  const handleTogglePacked = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPacked: !item.isPacked,
          };
        }

        return item;
      });
    });
  };

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercise</p>
        <h1>Packing List</h1>
        <p className="role">Practice updating objects inside an array.</p>

        <ul className="movie-list">
          {items.map((item) => {
            return (
              <li className={`movie-item ${item.isPacked ? 'packed' : ''}`} key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <small>{item.isPacked ? 'Packed' : 'Not Packed'}</small>
                </div>

                <button
                  className="toggle-button"
                  onClick={() => handleTogglePacked(item.id)}
                >
                  {item.isPacked ? 'Unpack' : 'Pack'}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;
