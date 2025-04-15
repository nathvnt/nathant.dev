"use client"; // This is a client component
import { useState, useEffect, useRef } from "react";

//import hooks & helper functions
import useTurnstile from "./hooks/turnstile";
import { scrollToSection, setupIntersectionObserver } from "./helpers/navigationHelpers";

//import components
import LoadingAnimation from "@/components/animations/loadinganimation";
import HomeImage from "@/components/main-sections/intro/image";
import StickyNav from "@/components/main-sections/intro/stickynav";
import Greeting from "@/components/main-sections/intro/greeting";
// import EmailCopy from "@/components/main-sections/intro/copyemail";
import Skills from "@/components/main-sections/skills/skills";
import Portfolio from "@/components/main-sections/portfolio/portfolio";
import Contact from "@/components/main-sections/contact/contact";

export default function Home() {
  // useState variables
  const isVerified = useTurnstile();
  const [showContent, setShowContent] = useState(false); 
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [contentOpacity, setContentOpacity] = useState(0);

  // refs for each section
  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // manually force page content to fade-in after loading animation
  useEffect(() => {
    if (showContent) {
      const fadeInTimeout = setTimeout(() => {
        setContentOpacity(1); 
      }, 100); 
      return () => clearTimeout(fadeInTimeout);
    }
  }, [showContent]);

  // after loading animation resolves, set timeout to delay typewriter
  // animation while page content fades in 
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
    if (!showContent) return;

    const cleanupObserver = setupIntersectionObserver(
      [bannerRef, skillsRef, experienceRef, portfolioRef, contactRef],
      setActiveSection
    );

    return cleanupObserver; // Clean up on unmount
  }, [showContent]);

  return (
    <div className={darkMode ? "dark" : ""}>

      {/* cloudflare turnstile widget*/}
      {!isVerified && (
        <div id="turnstile-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}></div>
      )}

      {/* trigger loading animation after turnstile verification */}
      {isVerified && !showContent && (
        <LoadingAnimation onFinish={() => setShowContent(true)} />
      )}

      {/* fade-in page content after loading animation */}
      {showContent && (
        <div
          className="page-content"
          style={{
            opacity: contentOpacity,
            transition: "opacity 1s ease-in",
          }}
        >
          <main className="text-white">

            {/* ---banner title bar--- */}
            <div ref={bannerRef} id="banner" className=" bg-emerald-600 dark:bg-black bg-opacity-30 py-8 flex justify-between border-b-2 border-black">
              <h1 className="text-2xl lg:text-3xl px-4 ">Nathaniel Rodgers</h1>
              {/* <ul className="flex items-center px-6">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-black" />
                </li>
              </ul> */}
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
            <section id="banner" className="min-h-screen border-b-2 border-black dark:bg-emerald-600 bg-black dark:bg-opacity-30">
              <div className="lg:pt-20 pt-16"></div>
              {/* fill space while greeting is loading */}
              {!showTypewriter && <div className="py-12 min-h-[11rem]"></div>}
              {showTypewriter && <Greeting />}

              <HomeImage />
              <h2 className="w-[80%] lg:w-[40%] mx-auto my-16 text-center text-xl">
                I am always looking to craft elegant, creative, and security-focused solutions that solve complex real-world problems.
              </h2>
              {/* <EmailCopy /> */}
            </section>

            {/* ---portfolio section--- */}
            <section ref={portfolioRef} id="portfolio" className="section-container bg-emerald-600 dark:bg-black bg-opacity-30">
              <Portfolio />
            </section>

            {/* ---skills section--- */}
            <section ref={skillsRef} id="skills" className="section-container dark:bg-emerald-600 bg-black dark:bg-opacity-30">
              <Skills darkMode={darkMode} />
            </section>

            {/* ---contact section--- */}
            <section ref={contactRef} id="contact" className="section-container bg-emerald-600 dark:bg-black bg-opacity-30">
              <Contact />
            </section>

          </main>
        </div>
      )}

      <footer className="min-h-32 bg-black"></footer>
    </div>
  );
}
