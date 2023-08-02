import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {
  NavigationBar, ScrollingText, FeatureSection, HeroSection, ExploreBook, Donation, ContactUs, SocialMedia
} from '../../component'

const Homepage = () => {
  return (
    <div>
    <NavigationBar></NavigationBar>
    <ScrollingText></ScrollingText>
    <HeroSection></HeroSection>
    <FeatureSection></FeatureSection>
    <ExploreBook></ExploreBook>
    <Donation></Donation>
    <ContactUs></ContactUs>
    <SocialMedia></SocialMedia>
    </div>
  )
}

export default Homepage