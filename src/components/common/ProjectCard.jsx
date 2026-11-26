import { ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const hasGithub = project.github && project.github !== "#";
  return (
    <article className={`project-card${project.id === 3 ? " project-card--portfolio" : ""}`}>
      <div className="project-top">
        <span className="project-icon-wrap"><FolderKanban className="card-icon" size={20} /></span>
        <div className="project-links">
          {hasGithub && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`} className="project-link"><FaGithub size={17} /></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`} className="project-link"><ExternalLink size={17} /></a>}
        </div>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">{project.technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div>
    </article>
  );
}

export default ProjectCard;
