import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SectionHeading from "../common/SectionHeading";
import SocialLinks from "../common/SocialLinks";

function Contact() {
  const emailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(personalInfo.email)}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading number="05" title="Let’s make" highlight="something" description="Have a role, project, or idea in mind? I’d be glad to hear from you." />
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Open to opportunities</p>
            <h3 className="contact-lede">Let’s build something <span>meaningful.</span></h3>
            <p className="contact-copy">I’m open to software development opportunities, collaborations, and interesting technical projects. Feel free to get in touch.</p>
            <a className="button button-primary contact-action" href={emailLink} target="_blank" rel="noopener noreferrer">Send me an email <ArrowUpRight size={16} /></a>
          </div>
          <div>
            <div className="contact-card">
              <h3>Contact details</h3>
              <a className="contact-row" href={emailLink} target="_blank" rel="noopener noreferrer" aria-label={`Email ${personalInfo.email}`}>
                <span className="contact-icon"><Mail size={18} /></span>
                <span><span className="contact-label">Email</span><span className="contact-value">{personalInfo.email}</span></span>
              </a>
              <div className="contact-row">
                <span className="contact-icon"><MapPin size={18} /></span>
                <span><span className="contact-label">Based in</span><span className="contact-value">{personalInfo.location}</span></span>
              </div>
              <div className="contact-availability"><span className="availability-dot" />{personalInfo.availability}</div>
            </div>
            <div className="contact-social">
              <p className="contact-social-label">Find me elsewhere</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
