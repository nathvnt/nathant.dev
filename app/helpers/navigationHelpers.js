//code for managing scroll to function and active section on home page

// Scroll to navigation function
export const scrollToSection = (ref) => {
    const offset = ref.current?.offsetTop - 50;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
};
  
  // Intersection Observer function
export const setupIntersectionObserver = (sections, setActiveSection) => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        //   console.log("Active Section:", entry.target.id); 
        }
      });
    }, options);
  
    sections.forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });
  
    // cleanup function
    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      });
    };
};