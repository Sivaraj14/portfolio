import { ArrowDown, ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SocialLinks from "../common/SocialLinks";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />{personalInfo.availability}</div>
          <h1 className="hero-title">Hi, I’m <span>{personalInfo.firstName}.</span></h1>
          <p className="hero-role">{personalInfo.role} building useful digital products.</p>
          <p className="hero-description">{personalInfo.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={personalInfo.resume} download="Sivaraj-R-Resume.pdf">Download résumé <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta"><span className="hero-meta-label">Find me on</span><SocialLinks /></div>
          <p className="hero-location"><MapPin size={13} style={{ verticalAlign: "-2px", marginRight: 5 }} />{personalInfo.location}</p>
        </div>
        <aside className="hero-terminal" aria-label="Developer profile summary">
          <div className="terminal-top">
            <span className="terminal-title"><Terminal size={16} /> profile.js</span>
            <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <div className="terminal-code" role="presentation">
            <div className="code-comment">// A little about me</div>
            <div><span className="code-purple">const</span> developer = {'{'}</div>
            <div>&nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-string">"{personalInfo.name}"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-key">role</span>: <span className="code-string">"{personalInfo.role}"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-key">interests</span>: [</div>
            {personalInfo.interests.map((interest) => <div key={interest}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"{interest}"</span>,</div>)}
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;<span className="code-key">openToWork</span>: <span className="code-purple">true</span></div>
            <div>{'}'};</div>
          </div>
          <div className="terminal-status">Ready to build something meaningful</div>
        </aside>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={14} /> Scroll to explore</a>
    </section>
  );
}

export default Hero;
