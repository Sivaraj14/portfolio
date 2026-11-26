import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Sivaraj, home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">SR</span>
          <span>Sivaraj R</span>
        </a>
        <div className="nav-links">
          {navigationLinks.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-links" id="mobile-navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          {navigationLinks.map((link) => <a key={link.name} href={link.href} onClick={closeMenu}>{link.name}</a>)}
          <a className="mobile-cta" href="#contact" onClick={closeMenu}>Let’s talk ↗</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
