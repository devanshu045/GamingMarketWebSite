import React, { useEffect, useRef, useState } from 'react';
import Navebar from './Navebar';
import Loading from '../ComanComponets/Loading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LandingSection from './LandingSection';
import AllCompanyLogo from './AllCompanyLogo';
import VideoSection from './VideoSection';
import CaseStudyGame from './CaseStudyGame';
import Footer from '../ComanComponets/Footer';

const IndexLandingPage = () => {
  const [loading, setLoading] = useState(true);
  let time = gsap.timeline()
  
  const timeoutLoading = setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
  
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <Loading timeline = {time} />
      ) : (
        <div>
          <Navebar timeline = {time}/>
          <LandingSection timeline = {time}/>
          <AllCompanyLogo className = "mt-10"timeline = {time}/>
          <VideoSection/>
          <CaseStudyGame/>
          <Footer/>
        </div>
      )}

    </div>
  );
};

export default IndexLandingPage;
