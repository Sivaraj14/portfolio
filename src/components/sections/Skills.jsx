import { skills } from "../../data/portfolio";
import SectionHeading from "../common/SectionHeading";
import SkillCategory from "../common/SkillCategory";

const skillCategories = [
  { title: "Programming languages", skills: skills.programmingLanguages },
  { title: "Frontend", skills: skills.frontend },
  { title: "Backend", skills: skills.backend },
  { title: "Databases", skills: skills.database },
  { title: "Tools & platforms", skills: skills.tools },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading number="02" title="Tools of the" highlight="trade" description="Technologies I use to explore problems, build applications, and bring ideas to life." />
        <div className="skills-grid">{skillCategories.map((category) => <SkillCategory key={category.title} {...category} />)}</div>
      </div>
    </section>
  );
}

export default Skills;
