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
    "ipflux.io", "HouseWarmth v4", "HouseWarmth v5", "MTGO Linux", 
    "Spelltable Automation", "3x YouTube", "Password Entropy Calculator", "DataSeal Privacy"
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
    <div className="text-white w-full">
      <h2 className="text-2xl lg:text-3xl py-2 text-center">
        My <span className="text-emerald-600">Portfolio</span>
      </h2>

      <div className="w-full flex flex-col lg:flex-row sm:gap-0 lg:gap-6 sm:p-0 lg:p-8">

        {/* desktop nav menu */}
        <div className="hidden lg:flex flex-col flex-shrink-0 w-[15%] pt-4">
          <div className="rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.85)] w-full overflow-hidden">
            <button
              onClick={() => sliderRef?.slickPrev()}
              className="bg-black/70 w-full text-white text-3xl hover:text-emerald-400 flex justify-center items-end rounded-t-md"
            >
              <span className="pb-1">🢕</span>
            </button>

            <div className="flex flex-col w-full items-stretch">
              {projectNames.map((name, index) => (
                <div
                  key={index}
                  onClick={() => sliderRef?.slickGoTo(index)}
                  className={`cursor-pointer px-4 py-2 border-l-4 transition-colors duration-300 ${
                    index === currentSlide
                      ? "bg-emerald-600 border-emerald-400 text-white font-semibold"
                      : "bg-black/30 border-transparent hover:bg-black/50 text-gray-300 hover:text-emerald-400"
                  }`}
                >
                  {name}
                </div>
              ))}
            </div>
            
            <button
                onClick={() => sliderRef?.slickNext()}
                className="bg-black/70 w-full text-white text-3xl hover:text-emerald-400 flex justify-center items-end rounded-b-md"
              >
                <span className="pt-1">🢗</span>
            </button>
          </div>
        </div>

        {/* mobile nav menu */}
        <div className="flex flex-col">
          <div className="flex sm:flex lg:hidden justify-center items-center py-4 w-full">
            <div className="flex justify-between items-center px-4 w-[95%]">
              <button
                onClick={() => sliderRef?.slickPrev()}
                className="text-emerald-400 font-extrabold text-3xl text-left w-[5%]"
              >
                ⦑
              </button>

              <span className="text-[18px] font-semibold text-white text-center flex-1 w-[90%]">
                {projectNames[currentSlide]}
              </span>

              <button
                onClick={() => sliderRef?.slickNext()}
                className="text-emerald-400 font-extrabold text-3xl text-right w-[5%]"
              >
                ⦒
              </button>
            </div>
          </div>
          {/* mobile nav dots */}
          <div className="flex lg:hidden justify-center gap-2 pb-4">
            {projectNames.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-emerald-400 scale-125"
                    : "bg-gray-500 opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* portfolio piece carousel */}
        <div className="sm:w-full lg:basis-0 lg:flex-grow lg:max-w-[calc(100%-15%-4rem)] shadow-[0_4px_30px_rgba(0,0,0,0.85)] rounded-lg mx-2 mt-4 mb-8 lg:mb-4">
          <Slider ref={(ref) => (sliderRef = ref)} {...settings}>
            <div><Ipflux /></div>
            <div><Hw4 /></div>
            <div><Hw5 /></div>
            <div><MTGOLinux /></div>
            <div><SpellTableAuto /></div>
            <div><ThreeXyt /></div>
            <div><PasswordEntropyCalculator /></div>
            <div><Dataseal /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
