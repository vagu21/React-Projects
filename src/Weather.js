import React, { useState } from 'react'
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';

const Weather = () => {
  const [city,setCity]=useState("");
  const [result,setResult]=useState("");
  const changeHandler=e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=cc3e155bda70e5f34a3709613ab5b9c3`).then(
    response=>response.json().then(
      data=>{
        const kelvin=data.main.temp;
        const humidity=data.main.humidity;
        const celsius=kelvin-273.5;
      setResult("Temparature at"+" "+city+"\n"+Math.round(celsius)+"°C"+"\n"+"Humidity"+humidity)
      
      })
  )

  }
  return (
    <div>
        <center>
        <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Weather Application</h5>
                    <form onSubmit={submitHandler}>
            <input type="text" name="city" value={city} onChange={changeHandler}/>&nbsp;&nbsp;<br/><br/>
            <input type="submit" value="Get Temparature"/>
          </form>
       <h1>{result}</h1>
                    </div>
                    </div>
                    </center>
    </div>
  )
}

export default Weather