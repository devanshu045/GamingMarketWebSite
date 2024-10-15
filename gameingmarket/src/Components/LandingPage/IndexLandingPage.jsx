import React, { useEffect, useRef, useState } from 'react';
import Navebar from './Navebar';
import Loading from '../ComanComponets/Loading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const IndexLandingPage = () => {
  const [loading, setLoading] = useState(true);
  const lineRef = useRef(null); // Reference for the line element
  const lineRef2 = useRef(null); // Reference for the line element
  const timeoutLoading = setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    if (!loading) {
      // Animate the line when loading is complete
      gsap.to(lineRef.current, {
        height: 0,
        duration: 1, // Duration of the animation
        delay:4,
        ease: 'power2.out', // Easing function
        onComplete: () => {
          // Here you can add any additional animations or logic after the line animation
        },
      });

      gsap.to(lineRef2.current, {
        height: 0,
        Y:1000,
        duration: 5, // Duration of the animation
        ease: 'power2.out', // Easing function
        onComplete: () => {
          // Here you can add any additional animations or logic after the line animation
        },
      });
    }
  }, [loading]);

  return (
    <div className="relative">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="absolute top-0 left-0 right-0">
            {/* Line for animation */}
            <div
              ref={lineRef}
              className="w-full bg-black"
              style={{ height: '2px' }} // Adjust the height as needed
            />
             <div
              ref={lineRef2}
              className="w-full bg-black"
              style={{ height: '2px' }} // Adjust the height as needed
            />
          </div>
          <Navebar />
        </div>
      )}
    </div>
  );
};

export default IndexLandingPage;
