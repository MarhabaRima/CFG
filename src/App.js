import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import IncrementButton from './IncrementButton.js'
import SpotifyEmbed from './spotifyEmbed.js'
import Weather from './weather.js'

function App() {
  return (
    <><div className="SpotifyApp">
      <h1> My vibe playlist </h1>
      <SpotifyEmbed />
    </div>
    <div className="WeatherApp">
      <Weather/>
    </div>
    <div className="App">
        <header className="App-header">
          <h1>This is a React app! Dedicated to the Dune book series</h1>
          <p>Books are fun to read and can be very helpful for learning new stuff</p>
          <p>Rules of book reading are fairly self-explanatory</p>

          <Button
            buttonText="Output Dune message"
            appendMessage=". They're great!" />
          <IncrementButton />

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div></>
  );
}

export default App;
