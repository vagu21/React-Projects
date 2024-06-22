import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Food2 = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const changeHandler = e => {
        setSearch(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=15440c2b&app_key=%207dbff94a23ab50c45bbbeb399d23e721&ingr=${search}&nutrition-type=cooking`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.hints);
            });
        setSearch("");
    }

    return (
        <div className="container">
            <center>
                <h1>Food Database</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={changeHandler} />
                    <input type="submit" value="search" />
                </form>
                <div className="row">
                    {
                        data.map((item, index) => (
                            <div className="col-md-4" key={index} style={{ marginBottom: '20px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{item.food.label}</ListGroup.Item>
                                        <ListGroup.Item>Calories: {item.food.nutrients.ENERC_KCAL}</ListGroup.Item>
                                        {item.food.brand && <ListGroup.Item>Brand: {item.food.brand}</ListGroup.Item>}
                                    </ListGroup>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </center>
        </div>
    )
}

export default Food2;
