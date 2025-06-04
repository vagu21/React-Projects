import React from 'react';

const Products = ({ data }) => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      padding: '20px 0'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative'
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      height: '220px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    imageOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    },
    cardBody: {
      padding: '25px'
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '15px',
      lineHeight: '1.4',
      fontFamily: "'Poppins', sans-serif"
    },
    caloriesContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      padding: '12px',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      borderRadius: '12px',
      color: '#fff'
    },
    caloriesIcon: {
      fontSize: '1.2rem',
      marginRight: '8px'
    },
    caloriesText: {
      fontSize: '1rem',
      fontWeight: '500'
    },
    button: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
    },
    ingredientsCount: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#667eea'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .recipe-card:hover .recipe-image {
            transform: scale(1.1);
          }
          .recipe-card:hover .image-overlay {
            opacity: 1;
          }
          .recipe-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          }
        `}
      </style>
      
      <div style={styles.grid}>
        {data.map(item => (
          <div 
            key={item.recipe.uri} 
            style={styles.card}
            className="recipe-card"
          >
            <div style={styles.imageContainer}>
              <img 
                src={item.recipe.image} 
                alt={item.recipe.label}
                style={styles.image}
                className="recipe-image"
              />
              <div 
                style={styles.imageOverlay}
                className="image-overlay"
              ></div>
              <div style={styles.ingredientsCount}>
                {item.recipe.ingredients.length} ingredients
              </div>
            </div>
            
            <div style={styles.cardBody}>
              <h5 style={styles.title}>{item.recipe.label}</h5>
              
              <div style={styles.caloriesContainer}>
                <span style={styles.caloriesIcon}>🔥</span>
                <span style={styles.caloriesText}>
                  {Math.round(item.recipe.calories)} calories
                </span>
              </div>
              
              <a 
                href={item.recipe.url} 
                style={styles.button}
                className="recipe-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Full Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
