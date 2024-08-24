import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/login'
import Signup from './components/signup';
import Land from './components/land'
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<Land/>}></Route>
          <Route path="/search" element={<Search/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
