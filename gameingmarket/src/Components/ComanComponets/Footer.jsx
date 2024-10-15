import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  useEffect(() => {
    // GSAP animation
    const tl = gsap.timeline();
    tl.fromTo('.footer', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 4 });
  }, []);

  return (
    <footer className="footer bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">1minus1 Limited</h2>
            <p className="text-sm">Branding, websites, motion & marketing for the games industry</p>
            <p className="mt-2">
              <strong>Head Office:</strong> 124 City Road, London, EC1V 2NX, UK
            </p>
            <p>
              <strong>Phone:</strong> +44 (0)20 3489 7673
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:city@1minus1.com" className="text-blue-400">city@1minus1.com</a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 1minus1 Limited. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Facebook</a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Twitter</a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Instagram</a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
