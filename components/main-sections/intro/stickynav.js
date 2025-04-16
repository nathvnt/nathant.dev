import styles from './intro.module.css';

export default function StickyNav({ scrollToSection, activeSection, bannerRef, skillsRef, portfolioRef, contactRef }) {
    return (
        <nav className={`${styles.stickyNav} lg:w-[50%] w-[100%] mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.85)]`}>
            <ul className="flex items-center justify-center rounded-md">
                <li 
                    className={`${styles.navItem} !lg:w-[15%] !w-[10%] border-x-2 rounded-l-md ${activeSection === "banner" ? styles.activeNavItem : ""}`}
                    onClick={() => scrollToSection(bannerRef)}
                >
                    <a className={styles.navA}>⌂</a>
                </li>

                <li 
                    className={`${styles.navItem} ${activeSection === "portfolio" ? styles.activeNavItem : ""}`}
                    onClick={() => scrollToSection(portfolioRef)}
                >
                    <a className={styles.navA}>Portfolio</a>
                </li>

                <li 
                    className={`${styles.navItem} border-x-2  ${activeSection === "skills" ? styles.activeNavItem : ""}`}
                    onClick={() => scrollToSection(skillsRef)}   
                >
                    <a className={styles.navA}>Skills</a>
                </li>
                
                <li 
                    className={`${styles.navItem} !border-r-2 !rounded-r-md !border-emerald-900 ${activeSection === "contact" ? styles.activeNavItem : ""}`}
                    onClick={() => scrollToSection(contactRef)}
                >
                    <a className={styles.navA}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
