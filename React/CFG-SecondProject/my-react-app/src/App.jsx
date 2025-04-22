import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import spotifyEmbed from './spotifyEmbed';
import Weather from './weatherapp';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  // Handle infinite scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={viteLogo} alt="Vite logo" />
            <span>My React App</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      
      {/* MAIN */}
      <main className="main-content">
        {/* Spotify */}
        <section className="spotify-section">
          <h1>Spotify Playlist</h1>
          {spotifyEmbed()}
        </section>
        
        {/* Weather */}
        <section className="weather-section">
          <Weather />
        </section>
        
        {/* Counter */}
        <section className="counter-section">
          <h1>Click Tracker</h1>
          <p>Ever wondered how many times you've clicked this button?</p>
          <div className="card">
            <button onClick={() => setCount(count + 1)}>
              You've clicked me {count} {count === 1 ? 'time' : 'times'}!
            </button>
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logos">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  );
}

export default App;
