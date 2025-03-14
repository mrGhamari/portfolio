import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">سلام، من</span>
            <span className="name">محمد رضا</span>
            <span className="role">توسعه‌دهنده فرانت‌اند</span>
          </h1>
          <p className="hero-description">
            متخصص در توسعه اپلیکیشن‌های وب مدرن با React و Vue.js، با تجربه در ساخت رابط‌های کاربری پویا و کارآمد
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              مشاهده پروژه‌ها
              <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i>
            </a>
            <a href="#contact" className="btn btn-outline">
              تماس با من
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="tech-stack">
            <div className="tech-item react">
              <img src="/images/react.svg" alt="React" />
            </div>
            <div className="tech-item vue">
              <img src="/images/vue.svg" alt="Vue" />
            </div>
            <div className="tech-item js">
              <img src="/images/javascript.svg" alt="JavaScript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 