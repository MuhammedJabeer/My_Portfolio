import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X,Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const navbarHeight = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
       className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
             <div className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-green-400" />
          <span className="text-white font-bold text-xl tracking-tight">
            Portfolio
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) =>
            link.path.startsWith("#") ? (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className="text-white hover:text-green-400 transition-colors text-sm lg:text-base font-medium tracking-wide"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-white hover:text-green-400 transition-colors text-sm lg:text-base font-medium tracking-wide",
                    isActive && "text-green-500"
                  )
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white hover:text-green-400 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
    {/* Mobile Navigation */}
<div
  className={cn(
    "fixed inset-0  pt-24 px-8 transition-transform duration-300 ease-in-out md:hidden",
    isOpen ? "translate-x-0  bg-black" : "translate-x-full"
  )}
>
  <div className="flex flex-col items-start space-y-6">
    {navLinks.map((link) =>
      link.path.startsWith("#") ? (
        <a
          key={link.path}
          href={link.path}
          onClick={(e) => {
            handleSmoothScroll(e, link.path);
            setIsOpen(false);
          }}
          className="text-white hover:text-green-400 text-lg sm:text-xl transition-colors"
        >
          {link.name}
        </a>
      ) : (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            cn(
              "text-white hover:text-green-400 text-lg sm:text-xl transition-colors",
              isActive && "text-green-500"
            )
          }
        >
          {link.name}
        </NavLink>
      )
    )}
  </div>
</div>

    </nav>
  );
};

export default Navbar;
