import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeHandler = e => {
    setCity(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    if (!city.trim()) return;
    
    setLoading(true);
    setError("");
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc3e155bda70e5f34a3709613ab5b9c3`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          setError("City not found. Please check the spelling and try again.");
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError("");
        }
        setCity("");
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch weather data. Please try again.");
        setLoading(false);
      });
  }

  const getWeatherIcon = (weatherMain) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Fog': '🌫️',
      'Haze': '🌫️'
    };
    return icons[weatherMain] || '🌤️';
  }

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    weatherCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '30px',
      padding: '50px',
      boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2d3748',
      marginBottom: '30px',
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    form: {
      marginBottom: '30px'
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '25px'
    },
    input: {
      width: '100%',
      padding: '18px 25px',
      fontSize: '1.1rem',
      border: '2px solid #e2e8f0',
      borderRadius: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f8fafc'
    },
    button: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
      minWidth: '180px'
    },
    weatherInfo: {
      marginTop: '30px'
    },
    cityName: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '20px',
      fontFamily: "'Poppins', sans-serif"
    },
    weatherIcon: {
      fontSize: '4rem',
      marginBottom: '20px'
    },
    temperature: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: '#667eea',
      marginBottom: '15px',
      fontFamily: "'Poppins', sans-serif"
    },
    description: {
      fontSize: '1.2rem',
      color: '#718096',
      marginBottom: '25px',
      textTransform: 'capitalize',
      fontWeight: '500'
    },
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '25px'
    },
    detailItem: {
      background: 'rgba(102, 126, 234, 0.1)',
      padding: '15px',
      borderRadius: '12px',
      textAlign: 'center'
    },
    detailLabel: {
      fontSize: '0.9rem',
      color: '#718096',
      fontWeight: '500',
      marginBottom: '5px'
    },
    detailValue: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#2d3748'
    },
    error: {
      color: '#e53e3e',
      fontSize: '1.1rem',
      marginTop: '20px',
      padding: '15px',
      background: 'rgba(229, 62, 62, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(229, 62, 62, 0.2)'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '3px solid rgba(255,255,255,0.3)',
      borderRadius: '50%',
      borderTopColor: '#fff',
      animation: 'spin 1s ease-in-out infinite'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .weather-input:focus {
            border-color: #667eea !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
            background-color: #fff !important;
          }
          .weather-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
          }
        `}
      </style>
      
      <div style={styles.weatherCard}>
        <h1 style={styles.title}>Weather App</h1>
        
        <form onSubmit={submitHandler} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={city}
              onChange={changeHandler}
              placeholder="Enter city name (e.g., London, Tokyo, New York)"
              style={styles.input}
              className="weather-input"
            />
          </div>
          
          <button
            type="submit"
            style={styles.button}
            className="weather-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span style={styles.loadingSpinner}></span>
                <span style={{marginLeft: '10px'}}>Loading...</span>
              </>
            ) : (
              'Get Weather'
            )}
          </button>
        </form>

        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {weatherData && (
          <div style={styles.weatherInfo}>
            <div style={styles.cityName}>
              {weatherData.name}, {weatherData.sys.country}
            </div>
            
            <div style={styles.weatherIcon}>
              {getWeatherIcon(weatherData.weather[0].main)}
            </div>
            
            <div style={styles.temperature}>
              {Math.round(weatherData.main.temp - 273.15)}°C
            </div>
            
            <div style={styles.description}>
              {weatherData.weather[0].description}
            </div>
            
            <div style={styles.detailsGrid}>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Feels like</div>
                <div style={styles.detailValue}>
                  {Math.round(weatherData.main.feels_like - 273.15)}°C
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Humidity</div>
                <div style={styles.detailValue}>
                  {weatherData.main.humidity}%
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Wind Speed</div>
                <div style={styles.detailValue}>
                  {weatherData.wind.speed} m/s
                </div>
              </div>
              
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Pressure</div>
                <div style={styles.detailValue}>
                  {weatherData.main.pressure} hPa
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather;
