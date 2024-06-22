import React, { useEffect, useState } from 'react';

const styles = {
  movieCard: {
    position: 'relative',
    width: '200px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  movieCardImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  movieCardOverlay: {
    position: 'absolute',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    boxSizing: 'border-box',
  },
  movieDescription: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    opacity: '0',
    transition: 'opacity 0.3s',
  },
  movieDescriptionVisible: {
    opacity: '0.8',
  },
  movieGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  container: {
    textAlign: 'center',
  },
};

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      style={styles.movieCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imageUrl} alt={movie.title} style={styles.movieCardImage} />
      <div style={styles.movieCardOverlay}>
        <h3>{movie.original_title}</h3>
      </div>
      <div
        style={{
          ...styles.movieDescription,
          ...(hover ? styles.movieDescriptionVisible : {}),
        }}
      >
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

const Movie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=6ca4ec4b877c3457a13490e0f1372beb&with_original_language=te')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.results);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Movies</h1>
      <div style={styles.movieGrid}>
        {data.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
