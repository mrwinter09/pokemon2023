import logo from './assets/Pikachu-01.svg';
import logobanner from './assets/pokemon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logobanner} alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By Ivan Winter
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
