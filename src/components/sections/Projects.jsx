import { projects } from "../../data/portfolio";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading number="03" title="Selected" highlight="projects" description="A selection of web applications built to support practical everyday workflows." />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
