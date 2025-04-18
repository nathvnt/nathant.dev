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
import Footer from "@/components/main-sections/footer/footer";

export default function Home() {

  // useState variables
  const isVerified = useTurnstile();
  const [showContent, setShowContent] = useState(false); 
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const [contentOpacity, setContentOpacity] = useState(0);

  // refs for each section
  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
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
      [bannerRef, skillsRef, portfolioRef, contactRef],
      setActiveSection
    );

    return cleanupObserver; // Clean up on unmount
  }, [showContent]);


  return (
    <div>
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
            <div ref={bannerRef} id="banner" className=" bg-emerald-600 bg-opacity-30 py-6 lg:py-8 flex justify-between border-b-2 border-black">
              <h1 className="text-2xl lg:text-3xl px-4 ">nathant.dev</h1>

              <ul className="flex items-center px-6">
                <li className="flex items-center group space-x-2 relative">
                  {/* tooltip*/}
                  <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white text-sm px-3 py-1 rounded relative">
                    Check out my GitHub!
                  </div>

                  {/* GitHub icon */}
                  <a
                    href="https://github.com/nathvnt"
                    target="_blank"
                    className="inline-flex items-center hover:scale-[1.1] transition-transform ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 lg:w-10 lg:h-10 animate-rotate-wiggle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.12 3.32 9.47 7.94 11 .58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.23.7-3.91-1.55-3.91-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.29-5.29-1.3-5.29-5.78 0-1.28.46-2.33 1.2-3.15-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.6.23 2.78.11 3.07.75.82 1.2 1.87 1.2 3.15 0 4.49-2.72 5.48-5.3 5.77.42.36.79 1.1.79 2.23 0 1.61-.01 2.91-.01 3.3 0 .3.21.67.8.55a11.5 11.5 0 0 0 7.93-11C23.5 5.74 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* ---sticky autoscroll navigation bar component-- */}
            <StickyNav 
              scrollToSection={scrollToSection}
              activeSection={activeSection}
              bannerRef={bannerRef} 
              skillsRef={skillsRef}
              portfolioRef={portfolioRef}
              contactRef={contactRef}
            />
          
            {/* ---intro section--- */}
            <section id="banner" className="min-h-screen border-b-2 border-black bg-black">
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
            <section ref={portfolioRef} id="portfolio" className="section-container bg-emerald-600 bg-opacity-30">
              <Portfolio />
            </section>

            {/* ---skills section--- */}
            <section ref={skillsRef} id="skills" className="section-container bg-black">
              <Skills />
            </section>

            {/* ---contact section--- */}
            <section ref={contactRef} id="contact" className="section-container bg-emerald-600 bg-opacity-30">
              <Contact />
            </section>

            <footer className=" bg-black">
              <Footer />
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}
