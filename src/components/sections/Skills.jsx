import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'فرانت‌اند',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ]
  },
  {
    category: 'ابزارها و تکنولوژی‌ها',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Webpack', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'REST APIs', level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">مهارت‌های من</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ "--width": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 