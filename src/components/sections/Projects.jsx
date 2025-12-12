import { memo, useMemo, useCallback } from 'react';
import { PROJECTS } from '@/constants/data';
import './Projects.css';

const TechTag = memo(function TechTag({ tech }) {
  return <span className="tech-tag">{tech}</span>;
});

const ProjectCard = memo(function ProjectCard({ project }) {
  const projectUrl = useMemo(() => {
    if (!project.link) return '#';
    return project.link.startsWith('http')
      ? project.link
      : `https://${project.link}`;
  }, [project.link]);

  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling?.classList.add('visible');
  }, []);

  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              loading="lazy"
              width="400"
              height="225"
              onError={handleImageError}
            />
            <div className="project-icon-placeholder">
              <i className="fas fa-folder" aria-hidden="true" />
            </div>
          </>
        ) : (
          <div className="project-icon-placeholder visible">
            <i className="fas fa-folder" aria-hidden="true" />
          </div>
        )}
        <div className="project-overlay">
          <a
            href={projectUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project`}
          >
            View Project
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
});

function Projects() {
  const projectCards = useMemo(
    () =>
      PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      )),
    []
  );

  return (
    <section
      className="projects"
      id="projects"
      dir="ltr"
      aria-label="Projects section"
    >
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">{projectCards}</div>
      </div>
    </section>
  );
}

export default memo(Projects);
