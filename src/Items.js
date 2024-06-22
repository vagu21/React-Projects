import React, { useEffect, useState } from 'react';

const Items = () => {
    const [data, setData] = useState([]);
    const categories = {};

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // Group items by category
    data.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    return (
        <div>
            {Object.keys(categories).map(category => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {categories[category].map(item => (
                            <div
                                key={item.id}
                                className='container'
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    margin: "10px",
                                    border: "1px solid #ccc",
                                    padding: "5px"
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Items;
