import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'سیستم مدیریت محتوا',
    description: 'یک سیستم مدیریت محتوا با React و Node.js که امکان مدیریت محتوا، کاربران و دسترسی‌ها را فراهم می‌کند.',
    image: '/images/cms-project.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#'
  },
  {
    title: 'اپلیکیشن مدیریت وظایف',
    description: 'یک اپلیکیشن مدیریت وظایف با Vue.js که به کاربران امکان ایجاد، ویرایش و پیگیری وظایف را می‌دهد.',
    image: '/images/todo-project.jpg',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'پلتفرم آموزش آنلاین',
    description: 'یک پلتفرم آموزش آنلاین با React که امکان برگزاری کلاس‌های آنلاین و مدیریت محتوای آموزشی را فراهم می‌کند.',
    image: '/images/education-project.jpg',
    technologies: ['React', 'Redux', 'WebRTC', 'Socket.io'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">پروژه‌های من</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn btn-primary">مشاهده پروژه</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 