import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Platzinauta.
        </p>
        <p>
        Esta es mi primer App en React.
        </p>
        <p>Nunca pares de aprender.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende sobre React
        </a>
      </header>
    </div>
  );
}

export default App;
