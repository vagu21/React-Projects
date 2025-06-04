import React, { useState } from 'react';

const Food2 = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const changeHandler = e => {
        setSearch(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        if (!search.trim()) return;
        
        setLoading(true);
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=15440c2b&app_key=%207dbff94a23ab50c45bbbeb399d23e721&ingr=${search}&nutrition-type=cooking`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.hints || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
        setSearch("");
    }

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
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
            color: '#2d3748',
            textShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '10px',
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        subtitle: {
            fontSize: '1.3rem',
            color: '#718096',
            fontWeight: '300'
        },
        searchContainer: {
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            margin: '0 auto 50px',
            border: '1px solid rgba(255,255,255,0.2)'
        },
        searchForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            alignItems: 'center'
        },
        searchInput: {
            width: '100%',
            padding: '18px 25px',
            fontSize: '1.1rem',
            border: '2px solid #e2e8f0',
            borderRadius: '15px',
            outline: 'none',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', sans-serif",
            backgroundColor: '#f8fafc'
        },
        searchButton: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            minWidth: '150px'
        },
        resultsContainer: {
            maxWidth: '1400px',
            margin: '0 auto'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
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
        cardHeader: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
        },
        foodName: {
            fontSize: '1.3rem',
            fontWeight: '600',
            margin: '0',
            fontFamily: "'Poppins', sans-serif"
        },
        cardBody: {
            padding: '25px'
        },
        nutrientItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: '1px solid #e2e8f0'
        },
        nutrientLabel: {
            fontSize: '1rem',
            color: '#4a5568',
            fontWeight: '500'
        },
        nutrientValue: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#2d3748'
        },
        caloriesBadge: {
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '15px'
        },
        brandBadge: {
            background: 'rgba(102, 126, 234, 0.1)',
            color: '#667eea',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '0.85rem',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '10px'
        },
        loadingSpinner: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            borderTopColor: '#fff',
            animation: 'spin 1s ease-in-out infinite'
        },
        emptyState: {
            textAlign: 'center',
            padding: '60px 20px',
            color: '#718096',
            fontSize: '1.2rem'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    .food-input:focus {
                        border-color: #667eea !important;
                        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
                        background-color: #fff !important;
                    }
                    .food-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
                    }
                    .food-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    }
                `}
            </style>

            <div style={styles.header}>
                <h1 style={styles.title}>Food Nutrition Database</h1>
                <p style={styles.subtitle}>Discover nutritional information for any food item</p>
            </div>

            <div style={styles.searchContainer}>
                <form onSubmit={submitHandler} style={styles.searchForm}>
                    <input
                        type="text"
                        value={search}
                        onChange={changeHandler}
                        placeholder="Search for food items (e.g., apple, chicken breast, rice...)"
                        style={styles.searchInput}
                        className="food-input"
                    />
                    <button
                        type="submit"
                        style={styles.searchButton}
                        className="food-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span style={styles.loadingSpinner}></span>
                                <span style={{marginLeft: '10px'}}>Searching...</span>
                            </>
                        ) : (
                            'Search Nutrition'
                        )}
                    </button>
                </form>
            </div>

            <div style={styles.resultsContainer}>
                {data.length === 0 && !loading ? (
                    <div style={styles.emptyState}>
                        Enter a food name to discover its nutritional information!
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                className="food-card"
                            >
                                <div style={styles.cardHeader}>
                                    <h3 style={styles.foodName}>{item.food.label}</h3>
                                </div>
                                
                                <div style={styles.cardBody}>
                                    <div style={styles.caloriesBadge}>
                                        🔥 {Math.round(item.food.nutrients.ENERC_KCAL || 0)} calories per 100g
                                    </div>
                                    
                                    <div style={styles.nutrientItem}>
                                        <span style={styles.nutrientLabel}>Protein</span>
                                        <span style={styles.nutrientValue}>
                                            {(item.food.nutrients.PROCNT || 0).toFixed(1)}g
                                        </span>
                                    </div>
                                    
                                    <div style={styles.nutrientItem}>
                                        <span style={styles.nutrientLabel}>Fat</span>
                                        <span style={styles.nutrientValue}>
                                            {(item.food.nutrients.FAT || 0).toFixed(1)}g
                                        </span>
                                    </div>
                                    
                                    <div style={styles.nutrientItem}>
                                        <span style={styles.nutrientLabel}>Carbs</span>
                                        <span style={styles.nutrientValue}>
                                            {(item.food.nutrients.CHOCDF || 0).toFixed(1)}g
                                        </span>
                                    </div>
                                    
                                    <div style={styles.nutrientItem}>
                                        <span style={styles.nutrientLabel}>Fiber</span>
                                        <span style={styles.nutrientValue}>
                                            {(item.food.nutrients.FIBTG || 0).toFixed(1)}g
                                        </span>
                                    </div>
                                    
                                    {item.food.brand && (
                                        <div style={styles.brandBadge}>
                                            Brand: {item.food.brand}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food2;
