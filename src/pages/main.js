import React from 'react';

import Header from '../components/header.js';
import About from '../components/about/about.js';

function Main() {
  return (
    <div>
        <Header main={true} />
        <About main={true} />
        {/* THIS IS BIG COMPONENT, THAT CONSIST OF SMALLER ONES
            ADD THEM LIKE ONE ABOVE                           */}
    </div>
  );
}

export default Main;
