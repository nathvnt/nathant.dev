export default function StickyNav({ scrollToSection, activeSection, bannerRef, skillsRef, experienceRef, portfolioRef, contactRef }) {
    return (
        <nav className="sticky top-5 z-10">
            <ul className="flex items-center justify-center text-black mb-5">
                <li>
                    <a 
                        className={`nav-item border-x-2 rounded-l-md ${activeSection === "banner" ? "!bg-emerald-600" : ""}`}
                        onClick={() => scrollToSection(bannerRef)}
                    >⌂</a>
                </li>
                <li>
                    <a 
                        className={`nav-item ${activeSection === "experience" ? "!bg-emerald-600" : ""}`}
                        onClick={() => scrollToSection(experienceRef)}
                    >Experience</a>
                </li>
                <li>
                    <a 
                        className={`nav-item border-x-2 ${activeSection === "portfolio" ? "!bg-emerald-600" : ""}`}
                        onClick={() => scrollToSection(portfolioRef)}
                    >Portfolio</a>
                </li>
                <li>
                    <a 
                        className={`nav-item ${activeSection === "skills" ? "!bg-emerald-600" : ""}`}
                        onClick={() => scrollToSection(skillsRef)}                
                    >Skills</a>
                </li>
                <li>
                    <a 
                        className={`nav-item border-x-2 rounded-r-md ${activeSection === "contact" ? "!bg-emerald-600" : ""}`} 
                        onClick={() => scrollToSection(contactRef)}
                    >Contact</a>
                </li>
            </ul>
        </nav>
    );
}
