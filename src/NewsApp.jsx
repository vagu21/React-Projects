import { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import FavoritesBoard from "./FavoritesBoard";

const NewsApp = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (article) => {
    setFavorites([...favorites, article]);
  };

  return (
    <div>
      
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      {category === "favorites" ? (
        <FavoritesBoard favorites={favorites} />
      ) : (
        <NewsBoard category={category} country={country} onAddToFavorites={addToFavorites} />
      )}
    </div>
  );
}

export default NewsApp;
