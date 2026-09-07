import { projects } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">專案</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <Reveal key={project.title} as="article" className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag tag--outline">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
