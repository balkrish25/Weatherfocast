import React from 'react';
import '../Styles/WeatherDisplayComponent.css';

function WeatherDisplayComponent({ weather, forecast, unit }) {
  const getDailyForecast = (forecast) => {
    const dailyData = [];

    const forecastByDate = forecast.list.reduce((acc, item) => {
      const date = item.dt_txt.split(' ')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});

    for (let date in forecastByDate) {
      const dayForecasts = forecastByDate[date];
      const middayForecast = dayForecasts.find((f) => f.dt_txt.includes('12:00:00'));
      dailyData.push(middayForecast || dayForecasts[0]);
    }

    return dailyData.slice(0, 5); 
  };

  const dailyForecast = forecast ? getDailyForecast(forecast) : [];

  return (
    <div className="weather-display-component">
      {weather && (
        <div className="current-weather">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
        </div>
      )}
      {dailyForecast.length > 0 && (
        <div className="forecast">
          <h3>5-Day Forecast</h3>
          {dailyForecast.map((item, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
              <p>{item.weather[0].description}</p>
              <p>{Math.round(item.main.temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherDisplayComponent;
