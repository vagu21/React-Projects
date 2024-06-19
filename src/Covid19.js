import React, { useEffect, useState } from 'react'

const Covid19 = () => {
   
    const [data,setData]=useState([])
   useEffect(()=>{
    fetch('https://data.covid19india.org/data.json').then(
        response=>response.json()).then(
            jdata=>setData(jdata.statewise)
        )
    
   },[])


  return (
    <div>
        <center>

      
        <h1>Covid 19 Dashboard</h1>
        
        <table className="table">
      <thead style={{ backgroundColor: 'black', color: 'white' }}>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Last Updates</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map(item=>{
            return (
                <tr>
                    <td>{item.state}</td>
                    <td>{item.confirmed}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{item.lastupdatedtime}</td>
                </tr>
            )
        })
      }
      </tbody>
      </table>
      </center>
    </div>
  )
}

export default Covid19