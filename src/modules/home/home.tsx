// import React from 'react'

import Header from "@/shared/widgets/header/header";
import Banner from './features/banner';
import Branding from './features/branding';
import Benefits from './features/benefits';
import FeaturesHighlight from "./features/features.Highlight";
import Pricing from "./features/pricing";
import Footer from "@/shared/widgets/footer/footer"

const Home = () => {  // here we put Home as capital because the components must 
    // not be start with the small letter .
  return (
    <div>
      <Header />
      <Banner/>
      <Branding/>
      <Benefits/>
      <FeaturesHighlight/>
      <Pricing/>
      <Footer/>


      
    </div>
  )
}

export default Home
