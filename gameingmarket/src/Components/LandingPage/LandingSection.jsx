import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';

const LandingSection = () => {
  const landingSectionRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(LandingSection.current,{opacity:0},{
        duration:4,
        opacity:1,
        stagger:1,
    })
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 }, // Start from below and invisible
      {
        duration: 1, // Duration for each text
        opacity: 1,
        y: 0, // Move to original position
        stagger: 0.5, // Stagger effect (0.5 seconds between each element)
      }
    );
  }, []);

  return (
    <div
      ref={landingSectionRef}
      className="LandingSection w-full h-screen flex flex-col items-center justify-center bg-[#D2B48C]" // Light brown background (tan)
      style={{
        backgroundImage: 'url(/star-4773.gif)',  // Use GIF as background
        backgroundSize: 'cover',                  // Cover the whole section
        backgroundPosition: 'center',             // Center the GIF
        backgroundRepeat: 'no-repeat',            // Avoid repeating the GIF
      }}
    >
      {/* Vertically aligned content */}
      <div className="mid w-[90%] md:w-[60%] lg:w-[40%] flex flex-col items-start">
        <h1 ref={(el) => (textRef.current[0] = el)} className="text-4xl md:text-7xl text-white">Distinct</h1>
        <h1 ref={(el) => (textRef.current[1] = el)} className="font-bold text-4xl md:text-7xl text-white">Always.</h1>
        <h4 ref={(el) => (textRef.current[2] = el)} className="text-md md:text-lg font-bold text-white mt-7">Branding, Website & Marketing For Video Game</h4>
      </div>

      {/* Button and additional text aligned below the main text */}
      <div className="below flex flex-col md:flex-row w-[90%] md:w-[60%] lg:w-[40%] items-center mt-6">
        <button ref={(el) => (textRef.current[3] = el)} className="bg-transparent border border-white rounded-full text-white py-3 px-6 md:py-5 md:px-5">
          Play
        </button>
        <div className="title flex flex-col items-start mt-4 md:mt-0 md:ml-10">
          <h2 ref={(el) => (textRef.current[4] = el)} className="font-bold text-lg md:text-2xl text-white">Check out our showreel</h2>
          <p ref={(el) => (textRef.current[5] = el)} className="w-full md:w-3/4 text-white mt-2 text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae sint labore nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
