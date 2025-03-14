import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>محمد رضا</h3>
            <p>توسعه‌دهنده فرانت‌اند</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">خانه</a></li>
              <li><a href="#skills">مهارت‌ها</a></li>
              <li><a href="#projects">پروژه‌ها</a></li>
              <li><a href="#contact">تماس</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} - تمامی حقوق محفوظ است</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 