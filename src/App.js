import { useState, useEffect } from 'react';
import './App.css';

const eventfn = () => {
  console.log('h1 clicado');
};

function App() {
  // const [reverse, setReverse] = useState(false);
  // const [counter, setCounter] = useState(0);
  // const reverseClass = reverse ? 'reverse' : '';

  // const handleClick = () => {
  //   setReverse(!reverse);
  //   setCounter(counter + 1);
  // };

  const [counter, setCounter] = useState(0);

  //component did update = Executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('component did update');
  });

  //component did mount = Executa uma vez
  useEffect(() => {
    console.log('component did mount');
    document.querySelector('h1')?.addEventListener('click', eventfn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventfn);
    };
  }, []);

  //component did mount com dependencia = Executa toda vez q a dependencia mudar
  useEffect(() => {
    console.log('component did mount with dependence');
  }, [counter]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Contador: {counter}</h1>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </header> */}
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Somar</button>
    </div>
  );
}

export default App;
