import React, { memo } from 'react';
import './Projects.css';

const ProjectCard = memo(({ project }) => (
  <div className="project-card">
    <div className="project-image">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="400"
          height="225"
          fetchpriority="low"
        />
      ) : (
        <div className="project-icon-placeholder">
          <i className="fas fa-folder"></i>
        </div>
      )}
      <div className="project-overlay">
        <a
          href={
            project.link.startsWith('http')
              ? project.link
              : `https://${project.link}`
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
));

const projects = [
  {
    title: 'Agility',
    description:
      'A Vue & Nuxt-powered content website on Agile and Scrum, delivering insightful articles, guides, and resources for efficient project and team management.',
    image: '',
    technologies: [
      'ٔNuxtJs',
      'VusJs',
      'TypeScript',
      'vite',
      'NuxtUi',
      'Tailwind CSS',
      'Seo Optimization',
    ],
    link: 'https://www.agility.ir',
  },
  {
    title: 'Booking Engine',
    description:
      'A platform that enables hotels to create their own websites effortlessly, offering customizable templates, content management, and booking features for a seamless online presence.',
    image: '',
    technologies: [
      'NuxtJs',
      'VueJs',
      'TypeScript',
      'Vuetify',
      'Pinia',
      'Vite',
      'Seo Optimization',
    ],
    link: 'https://tochal.bookat.org/',
  },
  {
    title: 'Forex Broker CRM',
    description:
      'A CRM platform for Forex brokers, built to manage clients, track trades, monitor performance, and streamline customer relations efficiently.',
    image: '',
    technologies: [
      'ReactJs',
      'NextJs',
      'Socket.io',
      'Redux',
      'TypeScript',
      'Material UI',
    ],
    link: 'https://deltafx.com',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects" dir="ltr">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
