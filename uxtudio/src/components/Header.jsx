import React from 'react';
import './Header.css';

function Header() {

  return (
    <div className="header">
        <div className="config">
            <img src="config.svg" alt="" />
            <div className="menu">
                Menu
            </div>
        </div>
        <div className="logo">
            <img src="logo.svg" alt="" />
        </div>
        <div className="talk-to-us">
            <p>
                Fale Conosco
            </p>
        </div>
    </div>
  )
};

export default Header;