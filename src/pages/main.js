import React from 'react';

import Header from '../components/header.jsx';
import About from '../components/About';

function Main() {
  return (
    <div>
        <Header main={true} />
        <About/>
        {/* THIS IS BIG COMPONENT, THAT CONSIST OF SMALLER ONES
            ADD THEM LIKE ONE ABOVE                           */}
    </div>
  );
}

export default Main;
