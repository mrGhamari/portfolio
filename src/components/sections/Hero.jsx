import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

import jsImage    from '@/assets/javascript.svg?url'
import tsImage    from '@/assets/typeScript.svg?url'
import reactImage from '@/assets/react.svg?url'
import vueImage   from '@/assets/vue.svg?url'

const Hero = () => {
  const sectionRef = useRef(null);
  const [skillsImages] = useState([
    { src: jsImage, alt: 'JavaScript Icon', class: 'js' },
    { src: tsImage, alt: 'TypeScript Icon', class: 'ts' },
    { src: reactImage, alt: 'React Icon', class: 'react' },
    { src: vueImage, alt: 'Vue Icon', class: 'vue' },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef} dir="ltr">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="name">Mohammadreza Ghamari</span>
            <span className="role">Frontend Developer</span>
          </h1>
          <p className="hero-description">
            Skilled in developing modern, high-performance web applications
            using React and Vue.js, with a focus on creating user-friendly
            interfaces and delivering seamless user experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-primary">
              Projects
              <i
                className="fas fa-arrow-right"
                style={{ marginLeft: '0.5rem' }}
              />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="tech-stack">
            {skillsImages.map((item, index) => (
              <div className={`tech-item ${item.class}`} key={index}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="70"
                  height="70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
