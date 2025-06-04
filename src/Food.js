import React, { useState } from 'react';
import Products from './Products';

const Food = ({ info }) => {
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
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=1fa53f09&app_key=c00479bfcdb4823f30504344286fd291`)
            .then(response => response.json())
            .then(info => {
                console.log("Fetched Data:", info); 
                setData(info.hits);
                setSearch("");
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
            padding: '40px 20px',
            fontFamily: "'Poppins', sans-serif"
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
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        subtitle: {
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.9)',
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
        searchInputFocus: {
            borderColor: '#4ecdc4',
            boxShadow: '0 0 0 3px rgba(78, 205, 196, 0.1)',
            backgroundColor: '#fff'
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
        searchButtonHover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)'
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
        noResults: {
            textAlign: 'center',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.2rem',
            marginTop: '40px'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    .search-input:focus {
                        border-color: #4ecdc4 !important;
                        box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1) !important;
                        background-color: #fff !important;
                    }
                    .search-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
                    }
                `}
            </style>
            
            <div style={styles.header}>
                <h1 style={styles.title}>Food Recipe Explorer</h1>
                <p style={styles.subtitle}>Discover delicious recipes from around the world</p>
            </div>

            <div style={styles.searchContainer}>
                <form onSubmit={submitHandler} style={styles.searchForm}>
                    <input 
                        type="text" 
                        value={search} 
                        onChange={changeHandler}
                        placeholder="Search for recipes (e.g., pasta, chicken, salad...)"
                        style={styles.searchInput}
                        className="search-input"
                    />
                    <button 
                        type="submit" 
                        style={styles.searchButton}
                        className="search-button"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span style={styles.loadingSpinner}></span>
                                <span style={{marginLeft: '10px'}}>Searching...</span>
                            </>
                        ) : (
                            'Search Recipes'
                        )}
                    </button>
                </form>
            </div>

            {data.length >= 1 ? (
                <Products data={data} />
            ) : (
                !loading && search === "" && (
                    <div style={styles.noResults}>
                        Enter a recipe name to start exploring delicious dishes!
                    </div>
                )
            )}
        </div>
    );
}

export default Food;
