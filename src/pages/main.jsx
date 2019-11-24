import React from 'react';

import About from '../components/About';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Advantages from '../components/Advantages/index.jsx';

function Main() {
  return (
    <div>
      <Header main={true} />
      <About/>
      <Advantages />
      <Footer main={true} />
    </div>
  );
}

export default Main;