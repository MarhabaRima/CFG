import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [cityInput, setCityInput] = useState('London');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = '083d328abfa94f37ac665937251704'; // Replace with your real API key
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                console.log(data);
                setWeatherInfo(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching weather:', err);
                setError('Could not fetch weather data.');
                setWeatherInfo(null); // Clear previous data
            }
        };

        fetchWeather(); // Call the function

    }, [cityInput]);

    const handleCityChange = (event) => {
        setCityInput(event.target.value);
    };

    return (
        <div>
            <h1>Weather Application</h1>
            <input type="text" value={cityInput} onChange={handleCityChange} />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weatherInfo && (
                <div>
                    <h2>{weatherInfo.location.name}, {weatherInfo.current.country}</h2>
                    <p>Region: {weatherInfo.location.region}</p>
                    <p>Condition: {weatherInfo.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;