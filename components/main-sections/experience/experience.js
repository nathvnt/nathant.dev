import styles from './experience.module.css'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ds from "../../../public/ds.png";
import cb from "../../../public/cb.png"
import adaptive from "../../../public/adaptive.png";
import { DiNodejsSmall, DiMysql, DiAngularSimple } from "react-icons/di";
import { SiPython, SiFlask, SiTailwindcss, SiSelenium, SiTypescript, SiPuppeteer, SiAmazonwebservices } from "react-icons/si";
import { FaServer, FaGithub, FaPhp, FaGitAlt, FaVuejs } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFiletypeJson } from "react-icons/bs";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-0 lg:right-20 transform -translate-y-1/2 z-10 cursor-pointer text-xl lg:text-6xl text-emerald-600 hover:text-emerald-800"
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-0 lg:left-20 transform -translate-y-1/2 z-10 cursor-pointer text-xl lg:text-6xl text-emerald-600 hover:text-emerald-800"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
}

export default function Experience({ darkMode }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl py-2 mb-10 lg:mb-20">
                Professional <span className="text-emerald-600">Experience</span>
            </h2>

            <Slider {...settings}>
                {/* Experience card */}
                <div className={styles.cardWrapper}>
                    {/* First half of card */}
                    <div className={styles.cardLeft}>
                        <h2>DataSeal Privacy</h2>
                        <h3>Software Engineer</h3>
                        <div className={styles.cardImage}>
                            <Image src={ds} alt="dataseal website" />
                        </div>
                    </div>
                    {/* Second half of card */}
                    <div className={styles.cardRight}>
                        <h3 className={styles.descriptionTitle}>Role Description</h3>
                        <p className={styles.roleDescription}>
                            Fullstack development building high-end automated data collection and removal tools, integrated 
                            into a client facing web application that can be used to ensure online privacy for customers.
                        </p>
                        <h3 className={styles.techTitle}>Tech Stack Used</h3>
                        <div className={`${styles.techiconContainer} gap-6 lg:gap-10 xl:gap-16 mt-2 lg:mt-6`}>
                            <div className={styles.techiconWrap}>
                                <SiTypescript />
                                <p>TypeScript</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <DiAngularSimple />
                                <p>Angular</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <SiTailwindcss />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <DiNodejsSmall />
                                <p>Node.js</p>
                            </div>
                        </div>
                        <div className={`${styles.techiconContainer} gap-6 lg:gap-10 xl:gap-16 mt-6 lg:mt-12`}>
                            <div className={styles.techiconWrap}>
                                <SiAmazonwebservices />
                                <p>AWS</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <DiMysql />
                                <p>MySQL</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <SiPuppeteer />
                                <p>Puppeteer</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <FaGitAlt />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second experience card */}
                <div className={styles.cardWrapper}>
                    {/* First half of card */}
                    <div className={styles.cardLeft}>
                        <h2>CrawlBee</h2>
                        <h3>Software Engineer</h3>
                        <div className={styles.cardImage}>
                            <Image src={cb} alt="crawlbee website" />
                        </div>
                    </div>
                    {/* Second half of card */}
                    <div className={styles.cardRight}>
                        <h3 className={styles.descriptionTitle}>Role Description</h3>
                        <p className={styles.roleDescription}>
                            Developed a highly detailed and custom fullstack web application with Vue.js from scratch. Integrated with PHP API and
                            MySQL Databases to display large amounts of structured property data.
                        </p>
                        <h3 className={styles.techTitle}>Tech Stack Used</h3>
                        <div className={`${styles.techiconContainer} gap-12 lg:gap-16 xl:gap-24 mt-2 lg:mt-6`}>
                            <div className={styles.techiconWrap}>
                                <SiTypescript />
                                <p>TypeScript</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <FaVuejs />
                                <p>Vue.js</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <SiTailwindcss />
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                        <div className={`${styles.techiconContainer} gap-12 lg:gap-16 xl:gap-24 mt-6 lg:mt-12`}>
                            <div className={styles.techiconWrap}>
                                <FaPhp />
                                <p>PHP</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <DiMysql />
                                <p>MySQL</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <FaGitAlt />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third experience card */}
                <div className={styles.cardWrapper}>
                    {/* First half of card */}
                    <div className={styles.cardLeft}>
                        <h2>The Adaptive</h2>
                        <h3>Python Developer</h3>
                        <div className={styles.cardImage}>
                            <Image src={adaptive} alt="adaptive graphic" />
                        </div>
                    </div>
                    {/* Second half of card */}
                    <div className={styles.cardRight}>
                        <h3 className={styles.descriptionTitle}>Role Description</h3>
                        <p className={styles.roleDescription}>
                            Developing and designing a custom tool-kit aimed at allowing professional photographers the ability to seamlessly 
                            automate the generation of image metadata used for the processing, management, and monetization of large photo collections.
                        </p>
                        <h3 className={styles.techTitle}>Tech Stack Used</h3>
                        <div className={`${styles.techiconContainer} gap-12 lg:gap-16 xl:gap-24 mt-2 lg:mt-6`}>
                            <div className={styles.techiconWrap}>
                                <SiPython />
                                <p>Python</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <SiFlask />
                                <p>Flask</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <SiSelenium />
                                <p>Selenium</p>
                            </div>
                        </div>
                        <div className={`${styles.techiconContainer} gap-12 lg:gap-16 xl:gap-24 mt-6 lg:mt-12`}>
                            <div className={styles.techiconWrap}>
                                <BsFiletypeJson />
                                <p>JSON</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <FaServer />
                                <p>SFTP</p>
                            </div>
                            <div className={styles.techiconWrap}>
                                <FaGitAlt />
                                <p>Gith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
