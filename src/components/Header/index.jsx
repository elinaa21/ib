import React from 'react';
import Logo from '../../img/logo.png';
import './index.css';

function Header() {
  return (
      <header>
        <div className="leftHeader">
          <img src={Logo} className="logo" alt="Logo" />
          <div>Название компании</div>
        </div>
        <div className="centerHeader">
          <div>Решения</div>
          <div>Поддержка</div>
          <div>Партнеры</div>
        </div>
        <div className="rightHeader">
          <div>Личный кабинет</div>
        </div>
      </header>
  );
}

export default Header;
