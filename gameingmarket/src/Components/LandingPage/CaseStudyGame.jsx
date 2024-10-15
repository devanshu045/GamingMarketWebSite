import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import large_intro1 from '../../assets/large_intro1_033d26b5fd.webp';
import large_intro2 from '../../assets/large_intro1_611a814312.webp';
import large_intro3 from '../../assets/large_intro1_82708bebb9.webp';
import large_wizards from '../../assets/large_wizards_fade_sq_4612e05faf.webp';

const CaseStudyGame = () => {
  const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card, index) => {
//       gsap.from(card, {
//         x: -100, // Start position
//         opacity: 0,
//         duration: 0.5,
//         delay: index * 0.2, // Stagger effect
//         ease: 'power2.out',
//       });
//     });
//   }, []);

  return (
    <div>
    <div className="heading flex items-start flex-col mb-8">
      <h1 className="bold text-2xl">Video Game Industry Case Study</h1>
      <h1 className="text-4xl w-[50%] text-center">
        Creative marketing for the Video Games industry.
      </h1>
    </div>
    <div className="casestudys flex flex-wrap justify-between gap-10 w-[50%]">
      {[large_intro1, large_intro2, large_intro3, large_wizards].map((imgSrc, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
          className="flex flex-col transition-transform duration-300 hover:scale-105 w-[30%] min-w-[200px]" // Ensure each card takes up 30% width with a minimum width
        >
          <img src={imgSrc} alt={`Case Study ${index + 1}`} className="object-cover w-full h-48" />
          <h3 className="bold">Turn</h3>
          <h1 className="text-4xl">Highly creative, animated website with 3D animation</h1>
        </div>
      ))}
    </div>
  
    </div>
  );
};

export default CaseStudyGame;
