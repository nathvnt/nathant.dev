import styles from './intro.module.css';

export default function StickyNav({ scrollToSection, activeSection, bannerRef, skillsRef, experienceRef, portfolioRef, contactRef }) {
    return (
        <nav className={`${styles.stickyNav} lg:w-[50%] w-[95%] mx-auto`}>
            <ul className="flex items-center justify-center rounded-md">
                <li 
                    className={`${styles.navItem} !lg:w-[15%] !w-[10%] border-x-2 rounded-l-md ${activeSection === "banner" ? "!bg-emerald-600" : ""}`}
                    onClick={() => scrollToSection(bannerRef)}
                >
                    <a className={styles.navA}>⌂</a>
                </li>

                <li 
                    className={`${styles.navItem} ${activeSection === "experience" ? "!bg-emerald-600" : ""}`}
                    onClick={() => scrollToSection(experienceRef)}
                >
                    <a className={styles.navA}>Experience</a>
                </li>
                <li 
                    className={`${styles.navItem} border-x-2 ${activeSection === "portfolio" ? "!bg-emerald-600" : ""}`}
                    onClick={() => scrollToSection(portfolioRef)}
                >
                    <a className={styles.navA}>Portfolio</a>
                </li>
                <li 
                    className={`${styles.navItem} ${activeSection === "skills" ? "!bg-emerald-600" : ""}`}
                    onClick={() => scrollToSection(skillsRef)}   
                >
                    <a className={styles.navA}>Skills</a>
                </li>
                <li 
                    className={`${styles.navItem} border-x-2 rounded-r-md ${activeSection === "contact" ? "!bg-emerald-600" : ""}`}
                    onClick={() => scrollToSection(contactRef)}
                >
                    <a className={styles.navA}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
