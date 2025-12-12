import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks';
import { TECH_STACK, PERSONAL_INFO } from '@/constants/data';
import './Hero.css';

const TechItem = memo(function TechItem({ src, alt, className }) {
  return (
    <div className={`tech-item ${className}`}>
      <img src={src} alt={alt} loading="lazy" width="70" height="70" />
    </div>
  );
});

function Hero() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const techItems = useMemo(
    () =>
      TECH_STACK.map((item) => (
        <TechItem
          key={item.className}
          src={item.src}
          alt={item.alt}
          className={item.className}
        />
      )),
    []
  );

  return (
    <section
      className={`hero ${isInView ? 'hero--in-view' : ''}`}
      id="home"
      ref={sectionRef}
      dir="ltr"
      aria-label="Hero section"
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="name">{PERSONAL_INFO.name}</span>
            <span className="role">{PERSONAL_INFO.role}</span>
          </h1>
          <p className="hero-description">{PERSONAL_INFO.description}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-primary">
              Projects
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <div className="tech-stack">{techItems}</div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
