import { useState } from "react";
import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import FavoritesBoard from "./FavoritesBoard";

const NewsApp = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (article) => {
    // Check if article is already in favorites
    const isAlreadyFavorite = favorites.some(fav => fav.url === article.url);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, article]);
    }
  };

  const removeFromFavorites = (articleUrl) => {
    setFavorites(favorites.filter(fav => fav.url !== articleUrl));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Inter', sans-serif"
    }
  };

  return (
    <div style={styles.container}>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      {category === "favorites" ? (
        <FavoritesBoard 
          favorites={favorites} 
          onRemoveFromFavorites={removeFromFavorites}
        />
      ) : (
        <NewsBoard 
          category={category} 
          country={country} 
          onAddToFavorites={addToFavorites}
          favorites={favorites}
        />
      )}
    </div>
  );
}

export default NewsApp;
