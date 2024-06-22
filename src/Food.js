import React, { useState } from 'react';
import Products from './Products';

const Food = ({ info }) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const changeHandler = e => {
        setSearch(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=1fa53f09&app_key=c00479bfcdb4823f30504344286fd291`)
            .then(response => response.json())
            .then(info => {
                console.log("Fetched Data:", info); 
                setData(info.hits);
                setSearch("");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    console.log("Data Length:", data.length);

    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <h1>Welcome</h1>
                    <h1>Food Recipe App</h1>
                    <input type="text" value={search} onChange={changeHandler} /><br/>&nbsp;<br/>
                    <input type="submit" className="btn btn-primary" value="Search" />
                </form>
                {data.length >= 1 ? <Products data={data} /> : null}
            </center>
        </div>
    );
}

export default Food;
