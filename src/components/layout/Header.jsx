import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
          <a href="/">پورتفولیو</a>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>خانه</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>درباره من</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>مهارت‌ها</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>پروژه‌ها</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>تماس</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Header; 