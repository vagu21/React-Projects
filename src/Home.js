import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/'); // Navigate to the login page after signing out
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to Home page</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
