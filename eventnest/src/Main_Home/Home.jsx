import React from 'react';
import Navbar from './navbar';
// import EventGrid from './EventGrid';
import EventSection from "./imageSlider";
import FeatureSection from './FeatureSection';


const home = () => {
  return (
    <>
    <Navbar/>
    <EventSection/>
    {/* <EventGrid/> */}
    <FeatureSection/>
    </>
  )
}

export default home