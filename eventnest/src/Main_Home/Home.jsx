import React from 'react';
import Navbar from './navbar';
import EventSection from "./imageSlider";
import FeatureSection from './FeatureSection';
import EventIntroSection from './EventIntroSection';


const home = () => {
  return (
    <>
    <Navbar/>
    <EventSection/>
    <FeatureSection/>
    <EventIntroSection/>

    </>
  )
}

export default home