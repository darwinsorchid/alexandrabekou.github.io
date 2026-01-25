import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                href={item.href}
                className="text-foreground/80 hover:text-purple-700/80 transition-colors duration-300"
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
