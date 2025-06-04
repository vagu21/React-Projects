import React, { useEffect, useState } from 'react';

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const styles = {
    movieCard: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '450px'
    },
    imageContainer: {
      position: 'relative',
      height: '300px',
      overflow: 'hidden'
    },
    movieCardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
      opacity: hover ? 1 : 0,
      transition: 'opacity 0.3s ease'
    },
    rating: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(255, 193, 7, 0.9)',
      color: '#000',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      backdropFilter: 'blur(10px)'
    },
    cardContent: {
      padding: '20px',
      height: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '8px',
      lineHeight: '1.3',
      fontFamily: "'Poppins', sans-serif",
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    overview: {
      fontSize: '0.85rem',
      color: '#718096',
      lineHeight: '1.4',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    releaseDate: {
      fontSize: '0.8rem',
      color: '#a0aec0',
      fontWeight: '500',
      marginTop: '8px'
    },
    hoverOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(0, 0, 0, 0.85)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      opacity: hover ? 1 : 0,
      transition: 'opacity 0.3s ease',
      textAlign: 'center'
    },
    hoverTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '15px',
      fontFamily: "'Poppins', sans-serif"
    },
    hoverOverview: {
      fontSize: '0.9rem',
      lineHeight: '1.5',
      textAlign: 'center'
    }
  };

  return (
    <div
      style={styles.movieCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="movie-card"
    >
      <div style={styles.imageContainer}>
        <img 
          src={imageUrl} 
          alt={movie.title} 
          style={{
            ...styles.movieCardImage,
            transform: hover ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div style={styles.overlay}></div>
        <div style={styles.rating}>
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
        <div style={styles.hoverOverlay}>
          <h3 style={styles.hoverTitle}>{movie.original_title}</h3>
          <p style={styles.hoverOverview}>{movie.overview}</p>
        </div>
      </div>
      
      <div style={styles.cardContent}>
        <div>
          <h3 style={styles.title}>{movie.original_title}</h3>
          <p style={styles.overview}>{movie.overview}</p>
        </div>
        <div style={styles.releaseDate}>
          Released: {new Date(movie.release_date).getFullYear()}
        </div>
      </div>
    </div>
  );
};

const Movie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: '#fff',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      marginBottom: '10px',
      fontFamily: "'Poppins', sans-serif"
    },
    subtitle: {
      fontSize: '1.3rem',
      color: 'rgba(255,255,255,0.9)',
      fontWeight: '300'
    },
    movieGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px 0'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      color: 'white',
      fontSize: '1.2rem'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '4px solid rgba(255,255,255,0.3)',
      borderRadius: '50%',
      borderTopColor: '#fff',
      animation: 'spin 1s ease-in-out infinite',
      marginRight: '15px'
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingSpinner}></div>
          Loading Telugu Movies...
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .movie-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
      
      <div style={styles.header}>
        <h1 style={styles.title}>Telugu Cinema</h1>
        <p style={styles.subtitle}>Discover the latest Telugu movies and their stories</p>
      </div>
      
      <div style={styles.movieGrid}>
        {data.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
