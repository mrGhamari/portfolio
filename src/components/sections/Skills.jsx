import { memo, useMemo } from 'react';
import { SKILLS } from '@/constants/data';
import './Skills.css';

const SkillBar = memo(function SkillBar({ name, level, id }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name" id={`skill-${id}`}>
          {name}
        </span>
        <span className="skill-level" aria-hidden="true">
          {level}%
        </span>
      </div>
      <div
        className="skill-bar"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-labelledby={`skill-${id}`}
      >
        <div className="skill-progress" style={{ '--width': `${level}%` }} />
      </div>
    </div>
  );
});

const SkillCategory = memo(function SkillCategory({ category, items, id }) {
  return (
    <div className="skills-category">
      <h3 className="category-title">{category}</h3>
      <div className="skills-list">
        {items.map((skill) => (
          <SkillBar
            key={skill.id}
            id={`${id}-${skill.id}`}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
});

function Skills() {
  const skillCategories = useMemo(
    () =>
      SKILLS.map((category) => (
        <SkillCategory
          key={category.id}
          id={category.id}
          category={category.category}
          items={category.items}
        />
      )),
    []
  );

  return (
    <section
      className="skills"
      id="skills"
      dir="ltr"
      aria-label="Skills section"
    >
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">{skillCategories}</div>
      </div>
    </section>
  );
}

export default memo(Skills);
