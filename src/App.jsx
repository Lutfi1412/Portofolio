import React, { useState, useEffect } from "react";

import Home from "./../src/layouts/Home.jsx";
import About from "./../src/layouts/About.jsx";
import Skill from "./../src/layouts/Skill.jsx";
import Project from "./../src/layouts/Project.jsx";
import Contact from "./../src/layouts/Contact.jsx";
import Footer from "./../src/layouts/Footer.jsx";
import Navbar from "./../src/layouts/Navbar.jsx";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      >
        <Home activeSection={activeSection} scrollToSection={scrollToSection} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <About />
      </section>

      {/* skill section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <Skill />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <Project />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
