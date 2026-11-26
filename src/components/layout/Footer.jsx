import { personalInfo } from "../../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="brand" aria-label="Sivaraj, back to home"><span className="brand-mark" aria-hidden="true">SR</span><span>Sivaraj R</span></a>
        <p className="footer-copy">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <a className="footer-top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
