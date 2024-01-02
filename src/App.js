import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementCounter }) {
  return <button onClick={() => incrementCounter(10)}>+</button>;
});

Button.propTypes = {
  incrementCounter: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num = 1) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementCounter={incrementCounter} />
    </div>
  );
}

export default App;
