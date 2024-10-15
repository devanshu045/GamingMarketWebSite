import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loading = () => {
  const lettersRef = useRef([]);

  
  useGSAP(()=>{
    gsap.fromTo(
        lettersRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          stagger: 0.2, // Each letter appears 0.2s after the previous one
          ease: "power2.out",
          repeat: -1,   // Infinite loop for the animation
          repeatDelay: 0.5, // Delay between repeats
          yoyo: true,   // Makes the animation reverse
        }
      );
  },[])

 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800">
      <div className="text-5xl font-bold flex space-x-2 text-white">
        {"Loading...".split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)} // Store each letter in refs
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading
