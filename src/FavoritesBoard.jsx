import NewsItem from "./NewsItem";

const FavoritesBoard = ({ favorites }) => {
    return (
      <div>
        <h2 className="text-center mb-4">Favorite <span className="badge bg-danger">News</span></h2>
        {
          favorites.length === 0 ? (
            <p className="text-center">No favorite articles yet.</p>
          ) : (
            favorites.map((news, index) => {
              return (
                <NewsItem
                  key={index}
                  title={news.title}
                  description={news.description}
                  src={news.src}
                  url={news.url}
                  onAddToFavorites={() => {}} // No need to add to favorites again
                />
              );
            })
          )
        }
      </div>
    );
  }
  
  export default FavoritesBoard;
  