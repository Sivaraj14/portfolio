import { GraduationCap, Code2, Lightbulb } from "lucide-react";
import { personalInfo, education } from "../../data/portfolio";
import SectionHeading from "../common/SectionHeading";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading number="01" title="A bit about" highlight="me" />
        <div className="about-grid">
          <div>
            <h3 className="about-subhead">Curious by nature, practical by design.</h3>
            <p className="about-lede">{personalInfo.about}</p>
            <div className="focus-grid">
              <article className="focus-card">
                <Code2 className="focus-icon" size={21} aria-hidden="true" />
                <h4>Building software</h4>
                <p>Developing applications and exploring modern technologies.</p>
              </article>
              <article className="focus-card">
                <Lightbulb className="focus-icon" size={21} aria-hidden="true" />
                <h4>Solving problems</h4>
                <p>Learning through practical projects and technical challenges.</p>
              </article>
            </div>
          </div>
          <div>
            <h3 className="about-subhead"><GraduationCap className="focus-icon" size={21} style={{ verticalAlign: "-5px", marginRight: 9 }} />Education</h3>
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <span className="education-date">{item.duration}</span>
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
              </article>
            ))}
            <div className="interest-wrap">
              <h4>Areas I’m interested in</h4>
              <div className="tag-list">{personalInfo.interests.map((interest) => <span key={interest} className="tag">{interest}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
