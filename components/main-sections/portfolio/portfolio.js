"use client";
import { useState } from "react";
import Slider from "react-slick";
import PasswordEntropyCalculator from "./pieces/entropycalculator";
import Ipflux from "./pieces/ipflux";
import Hw4 from "./pieces/hw4";
import Hw5 from "./pieces/hw5";
import Dataseal from "./pieces/dataseal";
import ThreeXyt from "./pieces/3xyt";
import MTGOLinux from "./pieces/mtgolinux";
import SpellTableAuto from "./pieces/spelltableauto";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
  const projectNames = [
    "ipflux.io", "HouseWarmth v4", "HouseWarmth v5", "DataSeal Privacy",
     "MTGO Linux", "Spelltable Automation", "3x YouTube", "Password Entropy Calculator"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = null;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="text-white mb-20 w-full p-8">
      <h2 className="text-2xl lg:text-3xl py-6 text-center">
        My <span className="text-emerald-600">Portfolio</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Vertical Navigation */}
        <div className="flex flex-col items-center w-2/12 gap-2">
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="text-white text-2xl hover:text-emerald-400"
          >
             🢕
          </button>

          <div className="flex flex-col w-full items-stretch mt-2">
            {projectNames.map((name, index) => (
              <div
                key={index}
                onClick={() => sliderRef?.slickGoTo(index)}
                className={`cursor-pointer px-4 py-2 border-l-4 transition-colors duration-300 ${
                  index === currentSlide
                    ? "bg-emerald-600 border-emerald-400 text-white font-semibold"
                    : "bg-black/30 border-transparent hover:bg-black/50 text-gray-300"
                }`}
              >
                {name}
              </div>
            ))}
          </div>

          <button
            onClick={() => sliderRef?.slickNext()}
            className="text-white text-2xl hover:text-emerald-400 mt-2"
          >
            🢗
          </button>
        </div>

        {/* Right Content Carousel */}
        <div className="w-10/12 p-4">
          <Slider ref={(ref) => (sliderRef = ref)} {...settings}>
            <div><Ipflux /></div>
            <div><Hw4 /></div>
            <div><Hw5 /></div>
            <div><Dataseal /></div>
            <div><MTGOLinux /></div>
            <div><SpellTableAuto /></div>
            <div><ThreeXyt /></div>
            <div><PasswordEntropyCalculator /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
