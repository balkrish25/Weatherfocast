import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchComponent from '../components/SearchComponent';
import WeatherDisplayComponent from '../components/WeatherDisplayComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import '../Styles/WeatherDashboard.css';

const API_KEY = 'ffa71be10fb5051a51808a987460e39b'
function WeatherDashboard() {
    const [selectedCity, setSelectedCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [favorites, setFavorites] = useState([]);
    // const [unit, setUnit] = useState('metric'); 
  
    useEffect(() => {
      const lastSearchedCity = localStorage.getItem('lastSearchedCity');
      if (lastSearchedCity) {
        setSelectedCity(lastSearchedCity);
      }
  
      fetchFavorites();
    }, []);
  
    useEffect(() => {
      if (selectedCity) {
        fetchWeather(selectedCity);
      }
    }, [selectedCity, unit]); 
  
    const fetchWeather = async (city) => {
      const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;
  
      try {
        const currentWeatherResponse = await axios.get(currentWeatherURL);
        const forecastResponse = await axios.get(forecastURL);
  
        setWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:5000/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
  
    const handleSearch = (city) => {
      setSelectedCity(city);
      localStorage.setItem('lastSearchedCity', city);
    };
  
    const handleAddFavorite = async (city) => {
      try {
        const response = await axios.post('http://localhost:5000/favorites', { name: city });
        setFavorites([...favorites, response.data]);
      } catch (error) {
        console.error('Error adding favorite:', error);
      }
    };
  
    const handleRemoveFavorite = async (cityId) => {
      try {
        await axios.delete(`http://localhost:5000/favorites/${cityId}`);
        setFavorites(favorites.filter((city) => city.id !== cityId));
      } catch (error) {
        console.error('Error removing favorite:', error);
      }
    };

    const toggleUnit = () => {
      setUnit(unit === 'metric' ? 'imperial' : 'metric');
    };
  
    return (
      <div className="weather-dashboard">
        <SearchComponent onSearch={handleSearch} />
        <button onClick={toggleUnit}>
          {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>
        <WeatherDisplayComponent weather={weather} forecast={forecast} unit={unit} />
        <FavoritesComponent
          favorites={favorites}
          onSelectCity={handleSearch}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </div>
    );
}

export default WeatherDashboard;
