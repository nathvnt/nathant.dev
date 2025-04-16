"use client";

export default function SpellTableAuto() {

  return (

    <div className="w-[100%] mx-auto text-[12px] lg:text-[16px] p-2 lg:p-6 rounded-md bg-black bg-opacity-65  border-2 border-emerald-600 ">
      <div className="sm:w-[95%] lg:w-[90%] mx-auto px-4 pb-4 flex flex-col gap-5">
        <span>
          Ealier this year a popular Discord bot 
          (<a href="https://spellbot.io/" target="_blank" className="underline text-blue-600 font-semibold">spellbot.io</a>) 
          was encountering issues after losing legacy access to the SpellTable 
          (<a href="https://spelltable.wizards.com/" target="_blank" className="underline text-blue-600 font-semibold">spelltable.wizards.com</a>)
          createGame API. SpellBots service allows online communities a convenient solution for organizing games of webcam Magic and generating 
          multiplayer queues from within their Discord servers. As a frequent user of SpellBot, I did some research into finding 
          an alternative solution for generating game lobbies that does not require special API access; what I came up with was using 
          a headless browser to create a game lobby via the SpellTable website. This works by capturing the game ID from 
          the 'createGame' endpoints resonse, while also blocking page redirect requests that automatically populate the game 
          with an initial player. This results in the ability to generate a working link to an empty lobby. 
          This solution has since been re-written in Playwright and is currently being used by the Discord SpellBot. 
        </span>

        <span className="text-[14px] lg:text-[18px] font-semibold">
          Check out the GitHub page:&nbsp;
          <a
            href="https://github.com/nathvnt/spelltable_automation"
            target="_blank"
            className="inline-flex items-center align-middle vertgap-2 hover:underline hover:scale-[1.1] transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.12 3.32 9.47 7.94 11 .58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.23.7-3.91-1.55-3.91-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.29-5.29-1.3-5.29-5.78 0-1.28.46-2.33 1.2-3.15-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.6.23 2.78.11 3.07.75.82 1.2 1.87 1.2 3.15 0 4.49-2.72 5.48-5.3 5.77.42.36.79 1.1.79 2.23 0 1.61-.01 2.91-.01 3.3 0 .3.21.67.8.55a11.5 11.5 0 0 0 7.93-11C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>
        </span>
      </div>
      
      <div className="w-[95%] mx-auto my-4"> 
          <img src="/spelltablebotss2.png" className="rounded-lg shadow-lg mx-auto block"/>
      </div>
    </div>

  );
}
