import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header>
        <h1 id="title">China One</h1>
        <h6 id="location">on 7 Mile and Schaefer</h6>
        <h4 id="subtitle">Szechuan & Cantonese Food To Take Out</h4>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
