import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Food from './Food';
import Covid19 from './Covid19';
import Weather from './Weather';
import Food2 from './Food2';
import Movie from './Movie';
import NewsApp from './NewsApp';
import Timer from './Timer';
import TodoList from './TodoList';
import Items from './Items';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/covid' element={<Covid19/>}/>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/food2' element={<Food2/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/news' element={<NewsApp/>}/>
          <Route path='/timer' element={<Timer/>}/>
          <Route path='/todo' element={<TodoList/>}/>
          <Route path='/items' element={<Items/>}/>
          




          
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
