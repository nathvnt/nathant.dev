"use client"; // This is a client component
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import pixelcomputer from '../public/pixelcomputer.png';
import LoadingAnimation from "@/components/animations/loadinganimation";
import HomeImage from "@/components/main-sections/intro/image";
import StickyNav from "@/components/main-sections/intro/stickynav";
import Greeting from "@/components/main-sections/intro/greeting";
import EmailCopy from "@/components/main-sections/intro/copyemail";
import Skills from "@/components/main-sections/skills/skills";
import Experience from "@/components/main-sections/experience/experience";
import Portfolio from "@/components/main-sections/portfolio/portfolio";
import Contact from "@/components/main-sections/contact/contact";

//ANIMATION SEQUENCE:
//This page loads with showContent set to false, which triggers the LoadingAnimation to run;
//after the LoadingAnimation finishes, there is a breif 1s timeout while the page-content fades-in.
//After the timeout resolves, showTypewriter is set to true which displays the animated Greeting. 

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  // Refs for each section
  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // scroll to navigation function
  const scrollToSection = (ref) => {
    const offset = ref.current?.offsetTop - 50;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  // Delay the typewriter start after the content fade-in completes
  useEffect(() => {
    if (showContent) {
      const typewriterTimer = setTimeout(() => {
        setShowTypewriter(true);
      }, 1000); 

      return () => clearTimeout(typewriterTimer);
    }
  }, [showContent]);

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    const sections = [bannerRef, skillsRef, experienceRef, portfolioRef, contactRef];
    sections.forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => {
      // Clean up observer on unmount
      sections.forEach((sectionRef) => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      });
    };
  }, []);

  return (
    <div className={darkMode ? "dark": ""}>
      {/* Show loading animation first */}
      {!showContent && (
        <LoadingAnimation onFinish={() => setShowContent(true)} />
      )}

      {/* Page content with fade-in effect */}
      <div
        className={`page-content ${showContent ? "fade-in" : ""}`}
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1s ease-in",
        }}
      >
        <main className="bg-black bg-opacity-20 text-white">
          {/* ---banner title bar--- */}
          <div ref={bannerRef} id="banner" className="bg-black py-4 mb-6 flex justify-between border-b-2 border-black">
            <h1 className="text-2xl lg:text-3xl px-4">Nathaniel Rodgers</h1>
            <ul className="flex items-center px-6">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl"/>
              </li>
            </ul>
          </div>
          
          {/* ---sticky autoscroll navigation bar component-- */}
          <StickyNav 
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            bannerRef={bannerRef} 
            skillsRef={skillsRef}
            experienceRef={experienceRef}
            portfolioRef={portfolioRef}
            contactRef={contactRef}
          />

          {/* ---intro section--- */}
          <section id="banner" className="min-h-screen border-b-2 border-black bg-slate-300 bg-opacity-20">

            {!showTypewriter && <div className="py-12 min-h-[11rem]"></div>}
            {showTypewriter && <Greeting />}

            <HomeImage />
            <h2 className="w-[80%] lg:w-[40%] mx-auto mt-16 text-center text-xl">
              I am always looking to craft elegant, creative, 
              and security focused solutions that can solve
              complex real-world problems.
            </h2>
            <EmailCopy />

          </section>

          {/* ---experience section--- */}
          <section ref={experienceRef} id="experience" className="section-container bg-black">
              <Experience darkMode={darkMode} />
          </section>

          {/* ---portfolio section--- */}
          <section ref={portfolioRef} id="portfolio" className="section-container bg-slate-300 bg-opacity-20">
              <Portfolio />
          </section>

          {/* ---skills section--- */}
          <section ref={skillsRef} id="skills" className="section-container bg-black">
            <Skills darkMode={darkMode} />
          </section>

          {/* ---contact section--- */}
          <section ref={contactRef} id="contact" className="section-container bg-slate-300 bg-opacity-20">
              <Contact />
          </section>

        </main>
      </div>
      
      <footer className="min-h-32 bg-black">
       
      </footer>
    </div>
  );
}
