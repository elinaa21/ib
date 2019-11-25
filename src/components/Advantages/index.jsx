import React from 'react';
import './index.css';
import Item from './item.jsx';
import comp from '../../img/comp.png';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.png';
import icon5 from '../../img/icon5.png';
import icon6 from '../../img/icon6.png';

function Advantages() {
  return (
    <div className="layer1">
      <img src={comp} alt="secure computer" className="computerImg" />
      <div className="text">
        <h1 className="adv">Наши преимущества:</h1>
        <Item src={icon1}>
          Praesent metus quam, condimentum at nisi et, euismod maximus sem.
        </Item>
        <Item src={icon2}>Fusce tempor ut nisi ut imperdiet.</Item>
        <Item src={icon3}>
          Morbi sodales turpis velit, in rhoncus nisi dignissim vitae.
        </Item>
        <Item src={icon4}>
          Vivamus elit odio, pulvinar non massa id, tincidunt ultricies sapien.
        </Item>
        <Item src={icon5}>
          Vestibulum varius, arcu orci sagittis orci, non ornare mauris sapien
          in nibh.
        </Item>
        <Item src={icon6}>
          Nullam luctus quam justo, non luctus felis placerat et.
        </Item>
      </div>
    </div>
  );
}

export default Advantages;
