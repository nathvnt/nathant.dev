import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function Intro() {
  const [greetingDone, setGreetingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGreetingDone(true), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center py-10 min-h-[11rem]">
      <h2 className="text-xl lg:text-3xl py-2">
        {!greetingDone && <span className="text-emerald-600">{'>'} </span>}
        {!greetingDone ? (
          <Typewriter
            words={['Hello, my name is Nathaniel.']}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            onDone={() => setGreetingDone(true)}
          />
        ) : (
          <>
            Hello, my name is <span className="text-emerald-600">Nathaniel</span>.
          </>
        )}
      </h2>

      {greetingDone && (
        <h2 className="text-lg lg:text-2xl py-2">
          <span className="text-emerald-600">{'>'} </span>
          <Typewriter
            words={['Software Engineer', 'Security Researcher', 'Linux Enthusiast']}
            loop={0} 
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      )}
    </div>
  );
}
