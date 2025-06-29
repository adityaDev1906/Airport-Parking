import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Airports from './components/Airports';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
 return (
    <Router>
      <div className="App">
        <h1>Airport Parking</h1>
        <nav>
          <ul>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
      <li><NavLink to="/airports" className={({ isActive }) => isActive ? "active" : ""}>Airport's</NavLink></li>
      <li><NavLink to="/faqs" className={({ isActive }) => isActive ? "active" : ""}>Faq's</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
            <li>
              <button className="book-btn">Book Parking</button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
