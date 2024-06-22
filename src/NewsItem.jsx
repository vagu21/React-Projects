import { useState } from 'react';

const NewsItem = ({ title, description, src, url, onAddToFavorites }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToFavorites = () => {
    onAddToFavorites({ title, description, src, url });
    setIsFavorited(true);
  };

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "260px", minHeight: "490px" }}>
      <img src={src ? src : 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} 
           style={{ height: "200px", width: "238px" }} 
           className="card-img-top" alt="news" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text flex-grow-1">{description ? description.slice(0, 90) : "News is just currently happening, some action will be taken against them."}</p>
        <a href={url} className="btn btn-primary mt-auto">Read more</a>
        <button className="btn btn-warning mt-2" onClick={handleAddToFavorites} disabled={isFavorited}>
          {isFavorited ? "Favorited" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default NewsItem;
