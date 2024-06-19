import React from 'react';

const Products = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map(item => 
          <div className="col-md-4" key={item.recipe.uri}>
            <div className="card" style={{ "width": "18rem" }}>
              <img className="card-img-top" src={item.recipe.image} alt="Recipe"/>
              <div className="card-body">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">Total amount of calories: Math.round({item.recipe.calories})</p>
                  <a href={item.recipe.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Recipe</a>
                </center>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
