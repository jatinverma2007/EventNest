import React from 'react';
import Navbar from './navbar';
import EventSection from "./imageSlider";
import FeatureSection from './FeatureSection';
import EventIntroSection from './EventIntroSection';
import Footer from '../Footer';


const home = () => {
  return (
    <>
    <Navbar/>
    <EventSection/>
    <FeatureSection/>
    <EventIntroSection/>
    <Footer/>
    </>
  )
}

export default home