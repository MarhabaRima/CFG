import logo from './logo.svg';
import './App.css';
import Button from './components/Button.jsx';
import Button2 from './components/Button2.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> This is a React app! Dedicated to the Dune Book series</h1>
        <p> Books are fun to read can be very helpful for learning new stuff </p>
        <p> Rules of book reading are fairly self-explanatory </p>
        <Button firstWord='Hello' secondWord='World'/>
        <p>
        <Button2 />
        </p>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
