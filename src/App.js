import React, { useState } from 'react';
import TodoList from './TodoList';
import Weather from './Weather';
import Food from './Food';
import Food2 from './Food2';
import Covid19 from './Covid19';
import UserAuth from './UserAuth';
import AuthCheck from './AuthCheck';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './AuthContext';
import Log from './Log';
import Home from './Home';
import Protected from './Protected';
import Timer from './Timer';
import NewsApp from './NewsApp';

function App() {
 
  return (
    
    <div className="App">
   
    {/* <TodoList/> */}
    {/* <Weather/> */}
   {/* <Food/>
   <Food2/> */}
   {/* <Covid19/> */}
   {/* <UserAuth/> */}
   {/* <AuthCheck/> */}
   {/* <AuthContextProvider>

   <Routes>
    <Route path="/" element={<Log />} />
    <Route path="/home" element={
      <Protected>
        <Home/>
      </Protected>
    }>
   
    </Route>
   </Routes>
   
   </AuthContextProvider> */}

   {/* <Timer/> */}
   <NewsApp/>
  
    </div>
  );
}

export default App;
