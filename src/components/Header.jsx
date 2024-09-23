import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Education Platform</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Pastikan ini ada
