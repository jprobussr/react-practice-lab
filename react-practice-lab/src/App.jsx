import Counter from './components/Counter.jsx';

const App = () => {
  return (

    <main>
      <h1>React Practice Lab</h1>


      <div className="counter-list">
        <Counter title='Passenger Counter' initialCount={0} />
        <Counter title='Students Counter' initialCount={10} step={5}/>
      </div>
     
    </main>
  );
};

export default App;
