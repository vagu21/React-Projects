import React, { useEffect, useState } from 'react';

const Items = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Group products by category
  const groupedData = data.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const categories = ['all', ...Object.keys(groupedData)];
  const filteredData = selectedCategory === 'all' ? data : groupedData[selectedCategory] || [];

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
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '40px'
    },
    filterButton: {
      padding: '12px 24px',
      borderRadius: '25px',
      border: '2px solid rgba(255,255,255,0.3)',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      fontWeight: '500',
      textTransform: 'capitalize',
      backdropFilter: 'blur(10px)'
    },
    filterButtonActive: {
      background: 'rgba(255,255,255,0.95)',
      color: '#2d3748',
      borderColor: 'rgba(255,255,255,0.8)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    productCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative',
      height: '220px',
      overflow: 'hidden',
      background: '#f8fafc'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '20px',
      transition: 'transform 0.4s ease'
    },
    categoryBadge: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      background: 'rgba(102, 126, 234, 0.9)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '15px',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'capitalize',
      backdropFilter: 'blur(10px)'
    },
    ratingBadge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'rgba(255, 193, 7, 0.9)',
      color: '#000',
      padding: '6px 12px',
      borderRadius: '15px',
      fontSize: '0.8rem',
      fontWeight: '600',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    cardContent: {
      padding: '25px'
    },
    productTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '12px',
      lineHeight: '1.4',
      height: '50px',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      fontFamily: "'Poppins', sans-serif"
    },
    productDescription: {
      fontSize: '0.9rem',
      color: '#718096',
      lineHeight: '1.5',
      marginBottom: '15px',
      height: '60px',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '15px'
    },
    price: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#667eea',
      fontFamily: "'Poppins', sans-serif"
    },
    addToCartButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '12px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
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
          Loading Products...
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
          .product-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          .product-card:hover .product-image {
            transform: scale(1.1);
          }
          .filter-button:hover {
            background: rgba(255,255,255,0.2) !important;
            transform: translateY(-2px);
          }
          .add-to-cart:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          }
        `}
      </style>
      
      <div style={styles.header}>
        <h1 style={styles.title}>Product Catalog</h1>
        <p style={styles.subtitle}>Discover amazing products from our curated collection</p>
      </div>

      <div style={styles.filterContainer}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.filterButton,
              ...(selectedCategory === category ? styles.filterButtonActive : {})
            }}
            className="filter-button"
          >
            {category === 'all' ? 'All Products' : category.replace(/'/g, '')}
          </button>
        ))}
      </div>

      <div style={styles.productsGrid}>
        {filteredData.map(product => (
          <div
            key={product.id}
            style={styles.productCard}
            className="product-card"
          >
            <div style={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.productImage}
                className="product-image"
              />
              <div style={styles.categoryBadge}>
                {product.category}
              </div>
              <div style={styles.ratingBadge}>
                ⭐ {product.rating.rate}
              </div>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.productTitle}>{product.title}</h3>
              <p style={styles.productDescription}>{product.description}</p>
              
              <div style={styles.priceContainer}>
                <span style={styles.price}>${product.price}</span>
                <button
                  style={styles.addToCartButton}
                  className="add-to-cart"
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
              
              <div style={{
                marginTop: '15px',
                fontSize: '0.85rem',
                color: '#a0aec0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{product.rating.count} reviews</span>
                <span>⭐ {product.rating.rate}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
