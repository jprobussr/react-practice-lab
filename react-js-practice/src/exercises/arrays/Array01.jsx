import './Array01.css';

const coffees = [
  { id: 1, name: 'Espresso', price: 3.5 },
  { id: 2, name: 'Cappuccino', price: 4.75 },
  { id: 3, name: 'Latte', price: 5.25 },
  { id: 4, name: 'Americano', price: 3.75 },
];

const Array01 = () => {
  return (
    <div className="coffee-menu">
      <h3 className="coffee-menu__title">Coffee Menu ☕</h3>

      <ul className="coffee-menu__list">
        {coffees.map((coffee) => (
          <li className="coffee-menu__item" key={coffee.id}>
            <h4 className="coffee-menu__name">{coffee.name}</h4>
            <p className="coffee-menu__price">${coffee.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Array01;
