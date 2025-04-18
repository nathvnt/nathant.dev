import styles from './skills.module.css';
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
// Icons Import
//Programming & Scripting Languages Icons
import { DiJsBadge, DiPython, DiTerminal } from "react-icons/di";
import { SiRust, SiTypescript } from "react-icons/si";
//Frameworks & Libraries Icons
import { DiAngularSimple, DiReact } from "react-icons/di";
import { SiVuedotjs, SiFlask, SiTailwindcss } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
// DevOps & Cloud Services Icons
import { SiAmazonwebservices, SiGit, SiDocker, SiKubernetes, SiTerraform } from "react-icons/si";
// Cyber Security & System Administration Icons
import { SiLinux, SiWireshark, SiBurpsuite, SiSplunk } from 'react-icons/si';
import { GiSeaDragon } from "react-icons/gi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 lg:right-0 top-[70%] lg:top-[60%] z-10 cursor-pointer text-3xl lg:text-6xl text-emerald-600 hover:text-emerald-800 transform -translate-y-1/2"
            onClick={onClick}
        >
            <IoIosArrowDown />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 lg:right-0 top-[30%] lg:top-[40%] z-10 cursor-pointer text-3xl lg:text-6xl text-emerald-600 hover:text-emerald-800 transform -translate-y-1/2"
            onClick={onClick}
        >
            <IoIosArrowUp />
        </div>
    );
}

export default function Skills({ darkMode }) {
    const sliderRef = useRef(null);

    const handleWheel = (event) => {
        if (sliderRef && sliderRef.current) {
            event.preventDefault();
            if (event.deltaY > 0) {
                sliderRef.current.slickNext();
            } else {
                sliderRef.current.slickPrev();
            }
        }
    };

    useEffect(() => {
        const sliderElement = sliderRef.current.innerSlider.list;
        sliderElement.addEventListener('wheel', handleWheel);
        return () => {
            sliderElement.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const settings = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="text-center w-[95%] lg:w-[80%] mx-auto">

            <h2 className="text-2xl lg:text-3xl py-2 mb-6">
                Technical <span className="text-emerald-600">Skills</span>
            </h2>

            <Slider {...settings} ref={sliderRef} className={`${styles.customSlider} my-8 lg:my-0`}>

                {/* Skills card: Programming & Scripting Languages */}
                <div className={`${styles.skillslideItem} ${darkMode ? 'dark:bg-black dark:bg-opacity-65' : 'bg-slate-300 bg-opacity-15'}`}>
                    <h3 className={styles.skillslideTitle}>
                        Programming & Scripting Languages
                    </h3>
                    <div className={styles.skilliconContainer}>
                        <div className={styles.skilliconWrap}>
                            <DiPython />
                            <p>Python</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <DiJsBadge />
                            <p>JavaScript</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiTypescript />
                            <p>TypeScript</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <DiTerminal />
                            <p>Bash</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiRust />
                            <p>Rust</p>
                        </div>
                    </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className={`${styles.skillslideItem} ${darkMode ? 'dark:bg-black dark:bg-opacity-65' : 'bg-slate-300 bg-opacity-15'}`}>
                    <h3 className={styles.skillslideTitle}>
                        Frameworks & Libraries
                    </h3>
                    <div className={styles.skilliconContainer}>
                        <div className={styles.skilliconWrap}>
                            <DiReact />
                            <p>React</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <DiAngularSimple />
                            <p>Angular</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiVuedotjs />
                            <p>Vue.js</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <IoLogoElectron />
                            <p>Electron</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiFlask />
                            <p>Flask</p>
                        </div>
                    </div>
                </div>

                {/* DevOps & Cloud Services */}
                <div className={`${styles.skillslideItem} ${darkMode ? 'dark:bg-black dark:bg-opacity-65' : 'bg-slate-300 bg-opacity-15'}`}>
                    <h3 className={styles.skillslideTitle}>
                        DevOps & Cloud Services
                    </h3>
                    <div className={styles.skilliconContainer}>
                        <div className={styles.skilliconWrap}>
                            <SiAmazonwebservices />
                            <p>AWS</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiGit />
                            <p>Git</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiDocker />
                            <p>Docker</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiKubernetes />
                            <p>Kubernetes</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiTerraform />
                            <p>Terraform</p>
                        </div>
                    </div>
                </div>

                {/* Security & System Administration */}
                <div className={`${styles.skillslideItem} ${darkMode ? 'dark:bg-black dark:bg-opacity-65' : 'bg-slate-300 bg-opacity-15'}`}>
                    <h3 className={styles.skillslideTitle}>
                        Security & System Administration
                    </h3>
                    <div className={styles.skilliconContainer}>
                        <div className={styles.skilliconWrap}>
                            <SiLinux />
                            <p>Linux</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiWireshark />
                            <p>Wireshark</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <GiSeaDragon />
                            <p>Ghidra</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiBurpsuite />
                            <p>Burp Suite</p>
                        </div>
                        <div className={styles.skilliconWrap}>
                            <SiSplunk />
                            <p>Splunk</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}