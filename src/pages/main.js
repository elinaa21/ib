import React from 'react';

import Header from '../components/header.js';
import AboutUs from '../components/aboutUs';
import OurAdvantages from '../components/ourAdvantages';


function Main() {
  return (
    <div>
        <Header main={true} />
        <AboutUs />
        <OurAdvantages />
        {/* THIS IS BIG COMPONENT, THAT CONSIST OF SMALLER ONES
            ADD THEM LIKE ONE ABOVE                           */}
    </div>
  );
}

export default Main;
