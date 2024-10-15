import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t10_banner from "../../assets/t10_banner_f3cd4de4a5.webm";

const VideoSection = () => {
  const bgcolor = useRef(null); // Background overlay
  const bgvideo = useRef(null); // Video
  const bgtext = useRef(null);  // Text content

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".background-section",
        start: "top 40%", // Trigger when the section is 40% into the viewport
        end: "bottom 100%",
        scrub: true, // Smooth scrolling animation
        // markers: true, // For debugging, remove in production
      },
    });

    // Animate the background color coming in from the left
    timeline.fromTo(
      bgcolor.current,
      { x: "-100%", backgroundColor: "transparent" },
      { x: "0%", backgroundColor: "#1f2937", ease: "power2.out", duration: 1.5 }
    );

    // Animate the video sliding in from the top
    timeline.fromTo(
      bgvideo.current,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
      "-=1" // Overlap this slightly with the background animation
    );

    // Animate the text sliding in from the bottom
    timeline.fromTo(
      bgtext.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
      "-=1" // Overlap with the video
    );
  }, []);

  return (
    <div className="background-section h-[80vh] mt-28 flex relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={bgvideo}
        className="absolute inset-0 w-full h-full object-cover"
        src={t10_banner}
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div ref={bgtext} className="video flex flex-col gap-8 h-full justify-center items-center relative z-10 text-white">
        <h1 className="text-3xl text-start w-[50%] mb-4">
          FEATURED PROJECT - TURN 10
        </h1>
        <h1 className="font-bold text-5xl w-[50%] mb-4">
          Create Design, 3D Animation And Modern CMS
        </h1>
      </div>

      {/* Overlay for background color */}
      <div ref={bgcolor} className="absolute inset-0 bg-gray-800 opacity-20"></div>
    </div>
  );
};

export default VideoSection;
