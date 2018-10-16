import React from 'react';

import logoTagline from '../assets/logoTagline.png';
// if the above line fails, use the below line: 
// const logoTagline = require('./logoTagline.png');

export default function Header () {
  return (
    <div className="headerNav">
      <div className="header-banner">
        <img className="header-logoTagline" src={logoTagline}  alt="logo" />
      </div>
      
    </div> 
  )
}
