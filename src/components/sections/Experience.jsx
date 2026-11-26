import { experience } from "../../data/portfolio";
import SectionHeading from "../common/SectionHeading";
import ExperienceCard from "../common/ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading number="04" title="Where I’ve" highlight="learned" description="Hands-on software development experience across robotics and AI projects." />
        <div className="timeline">{experience.map((item) => <ExperienceCard key={item.id} item={item} />)}</div>
      </div>
    </section>
  );
}

export default Experience;
