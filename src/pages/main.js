import React from 'react';

import Header from '../components/header.js';


function Main() {
  return (
    <div>
        <Header main={true} />
        {/* THIS IS BIG COMPONENT, THAT CONSIST OF SMALLER ONES
            ADD THEM LIKE ONE ABOVE                           */}
    </div>
  );
}

export default Main;
