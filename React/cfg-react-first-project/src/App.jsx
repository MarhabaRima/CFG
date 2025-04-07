import logo from './logo.svg';
import './App.css';
import Button from './components/Button.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "Heading"> Welcome to my First React Project </h1>
        <h2 className = "Short-Description">
          1. React is a JavaScript library for building user interfaces.
          <br/>
          2. React was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.
          <br/>
          3. React uses a virtual DOM to improve performance and efficiency.
        </h2>
        <Button/>
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
