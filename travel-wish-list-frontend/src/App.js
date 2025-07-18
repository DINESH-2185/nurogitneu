import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Wishlist from './pages/Wishlist';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h2>Travel Wishlist</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            {!user ? (
              <li><Link to="/login">Login</Link></li>
            ) : (
              <li><Link to="/logout">Logout</Link></li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/logout" element={<Logout onLogout={() => setUser(null)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
