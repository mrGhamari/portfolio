import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'VueJs', level: 85 },
      { name: 'ReactJs', level: 50 },
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'NodeJs', level: 40 },
      { name: 'Vite', level: 60 },
      { name: 'Git', level: 70 },
      { name: 'Seo Tools', level: 70 },
      { name: 'REST APIs', level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills" dir="ltr">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
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