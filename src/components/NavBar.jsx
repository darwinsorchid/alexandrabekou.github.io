import { useEffect, useState, useCallback } from "react";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "RESEARCH", href: "#research" },
  { name: "TECH STACK", href: "#techstack" },
  { name: "LAB SKILLS", href: "#labskills" },
  { name: "FUN", href: "#fun" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (e, href) => {
    // Stop ALL default behavior
    e.preventDefault();
    e.stopPropagation();

    // Remove hash from URL first
    window.history.replaceState(null, null, window.location.pathname);

    // Then scroll
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 10);

          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 right-0 z-50 transition-all duration-300 w-auto transform ${
        isScrolled ? "bg-transparent shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-foreground/80 hover:text-purple-700/80 transition-colors duration-300 block"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
