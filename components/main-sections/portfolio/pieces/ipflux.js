"use client";
import { useEffect, useRef, useState } from "react";

export default function Ipflux() {

  return (
    <div className="w-[100%] mx-auto text-[12px] lg:text-[16px] p-2 lg:p-6 rounded-md bg-black bg-opacity-65  border-2 border-emerald-600">
      <div className="sm:w-[95%] lg:w-[90%] mx-auto px-4 pb-4 flex flex-col gap-5">
        <span>
          ipflux.io is an open source host-based network traffic analyzer tool I started working on in 2024; 
          the current iteration (released April 2025) has a user interface built with Electron that is able to spawn and manage detached
          Python processes which collect and organize network traffic data. These detached processes can be scheduled 
          at a system level to run passively in the background over a long period of time; this creates a light weight 
          solution for generating traffic pattern baselines that include over 20 unique statistical metrics.  
        </span>

        <span className="text-[14px] lg:text-[18px] font-semibold">
          Website: 
          <a 
            href="https://ipflux.io/" 
            target="_blank"
            className="underline text-blue-600 font-semibold ml-2"
          >
            https://ipflux.io/
          </a>
        </span>

        <span className="text-[14px] lg:text-[18px] font-semibold">
          Check out the GitHub page:&nbsp;
          <a
            href="https://github.com/nathvnt/ipfluxio-linux/tree/master"
            target="_blank"
            className="inline-flex items-center align-middle vertgap-2 hover:underline hover:scale-[1.1] transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 lg:w-8 lg:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.12 3.32 9.47 7.94 11 .58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.23.7-3.91-1.55-3.91-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.29-5.29-1.3-5.29-5.78 0-1.28.46-2.33 1.2-3.15-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.6.23 2.78.11 3.07.75.82 1.2 1.87 1.2 3.15 0 4.49-2.72 5.48-5.3 5.77.42.36.79 1.1.79 2.23 0 1.61-.01 2.91-.01 3.3 0 .3.21.67.8.55a11.5 11.5 0 0 0 7.93-11C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>
        </span>
      </div>

      <div className="w-[95%] mx-auto my-4"> 
        <img src="/ipflux/ipfss2.png" className="rounded-lg shadow-lg mx-auto block"/>
      </div>
    </div>
  );
}
