import { useState } from "react";

const Navbar = ({ setCategory, setCountry }) => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
    setIsMenuOpen(false);
  };

  const categories = [
    { id: "general", name: "General", icon: "📰" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "health", name: "Health", icon: "🏥" },
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "entertainment", name: "Entertainment", icon: "🎬" },
    { id: "favorites", name: "Favorites", icon: "❤️" }
  ];

  const styles = {
    navbar: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    brand: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#2d3748',
      textDecoration: 'none',
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navItems: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    categoryList: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    categoryItem: {
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '2px solid transparent'
    },
    categoryItemActive: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    },
    categoryItemHover: {
      background: 'rgba(102, 126, 234, 0.1)',
      borderColor: 'rgba(102, 126, 234, 0.2)',
      transform: 'translateY(-1px)'
    },
    countrySelect: {
      padding: '10px 15px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      background: 'rgba(255, 255, 255, 0.9)',
      fontSize: '0.9rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#2d3748'
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '20px',
      display: isMenuOpen ? 'block' : 'none'
    },
    mobileCategoryList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px'
    }
  };

  return (
    <>
      <style>
        {`
          .category-item:hover {
            background: rgba(102, 126, 234, 0.1) !important;
            border-color: rgba(102, 126, 234, 0.2) !important;
            transform: translateY(-1px) !important;
          }
          .country-select:focus {
            border-color: #667eea !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          }
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
      
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <a href="#" style={styles.brand}>
            📰 NewsHub
          </a>
          
          <div style={styles.navItems} className="desktop-nav">
            <ul style={styles.categoryList}>
              {categories.map(category => (
                <li
                  key={category.id}
                  style={{
                    ...styles.categoryItem,
                    ...(activeCategory === category.id ? styles.categoryItemActive : {})
                  }}
                  className="category-item"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
            
            <select 
              style={styles.countrySelect}
              className="country-select"
              onChange={(e) => setCountry(e.target.value)}
              defaultValue="us"
            >
              <option value="us">🇺🇸 United States</option>
              <option value="gb">🇬🇧 United Kingdom</option>
              <option value="in">🇮🇳 India</option>
              <option value="ca">🇨🇦 Canada</option>
              <option value="au">🇦🇺 Australia</option>
              <option value="de">🇩🇪 Germany</option>
              <option value="fr">🇫🇷 France</option>
              <option value="jp">🇯🇵 Japan</option>
              <option value="br">🇧🇷 Brazil</option>
              <option value="it">🇮🇹 Italy</option>
              <option value="ru">🇷🇺 Russia</option>
              <option value="cn">🇨🇳 China</option>
              <option value="kr">🇰🇷 South Korea</option>
              <option value="mx">🇲🇽 Mexico</option>
              <option value="nl">🇳🇱 Netherlands</option>
              <option value="se">🇸🇪 Sweden</option>
              <option value="no">🇳🇴 Norway</option>
              <option value="ch">🇨🇭 Switzerland</option>
              <option value="sg">🇸🇬 Singapore</option>
              <option value="ae">🇦🇪 UAE</option>
            </select>
          </div>
          
          <button 
            style={styles.mobileMenuButton}
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        <div style={styles.mobileMenu} className="mobile-menu">
          <div style={styles.mobileCategoryList}>
            {categories.map(category => (
              <div
                key={category.id}
                style={{
                  ...styles.categoryItem,
                  ...(activeCategory === category.id ? styles.categoryItemActive : {})
                }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
          
          <select 
            style={{...styles.countrySelect, width: '100%'}}
            onChange={(e) => setCountry(e.target.value)}
            defaultValue="us"
          >
            <option value="us">🇺🇸 United States</option>
            <option value="gb">🇬🇧 United Kingdom</option>
            <option value="in">🇮🇳 India</option>
            <option value="ca">🇨🇦 Canada</option>
            <option value="au">🇦🇺 Australia</option>
            <option value="de">🇩🇪 Germany</option>
            <option value="fr">🇫🇷 France</option>
            <option value="jp">🇯🇵 Japan</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
