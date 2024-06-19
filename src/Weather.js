import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = e => {
    setCity(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=cc3e155bda70e5f34a3709613ab5b9c3`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          setResult("City not found");
        } else {
          const kelvin = data.main.temp;
          const humidity = data.main.humidity;
          const celsius = kelvin - 273.5;
          setResult(`Temperature at ${city} : ${Math.round(celsius)} °C\nHumidity: ${humidity} %`);
        }
        setCity("");
      });
  }

  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Weather Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="city" value={city} onChange={changeHandler} />&nbsp;&nbsp;<br /><br />
              <button type="submit" style={{
                background: "red",
                color: "white",
                padding: "2px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer"
              }}>Get Temperature</button>
            </form>
            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Weather;
