import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



// Assuming you have already imported these logo images correctly from your assets
import bonus_nex from '../../assets/Comanyslog/bonus_new2_f619346e15.png';
import compulsion_logic from '../../assets/Comanyslog/compulsion_logo1_8966ff869a.png';
import forza from '../../assets/Comanyslog/forza_new_a0a1ddff76.png';
import lightspeed_logo from '../../assets/Comanyslog/lightspeed_logo_new_a2fce9d216.png';
import medium_fasttravel from '../../assets/Comanyslog/medium_fasttravel_29cfc45cba.png';
import PLAION_Logo_horizontal from '../../assets/Comanyslog/PLAION_Logo_horizontal_RGB_pos_7a5f8aea77.png';
import small_Rocksteady from '../../assets/Comanyslog/small_Rocksteady_ef14bba52a.webp';
import tencent_new from '../../assets/Comanyslog/tencent_new_2b1e37a84a.png';
import turn10 from '../../assets/Comanyslog/turn10_d3a138ac2d.svg';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AllCompanyLogo = () => {
  const logoRefs = useRef([]); // Array of refs for each logo

  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      logoRefs.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Time between each logo appearance
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: logoRefs.current, // Trigger animation when this element enters the viewport
          start: 'top 80%', // Animation will start when the top of the logo container is 80% down the viewport
          end: 'bottom 20%', // Animation will end when the bottom is 20% up the viewport
        //   markers: true, // Enable markers for debugging (remove in production)
          scrub: 2, // Link animation progress to scroll (smooth)
        },
      }
    );
  }, []);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-28 mt-20 bg-white justify-center h-full items-center p-4'>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[0] = el)} src={bonus_nex} alt="Bonus Nex Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[1] = el)} src={compulsion_logic} alt="Compulsion Logic Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[2] = el)} src={forza} alt="Forza Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[3] = el)} src={lightspeed_logo} alt="Lightspeed Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[4] = el)} src={medium_fasttravel} alt="Fasttravel Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[5] = el)} src={PLAION_Logo_horizontal} alt="PLAION Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[6] = el)} src={small_Rocksteady} alt="Rocksteady Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[7] = el)} src={tencent_new} alt="Tencent Logo" className="h-20 w-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img ref={(el) => (logoRefs.current[8] = el)} src={turn10} alt="Turn 10 Logo" className="h-20 w-auto" />
      </div>
    </div>
  );
};

export default AllCompanyLogo;
