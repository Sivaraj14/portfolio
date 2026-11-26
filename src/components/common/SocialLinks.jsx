import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: FaGithub },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedin },
  { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`} aria-label="Social links">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target={name === "Email" ? undefined : "_blank"}
          rel={name === "Email" ? undefined : "noopener noreferrer"}
          aria-label={name}
          title={name}
          className="social-link"
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
