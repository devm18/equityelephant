import React from 'react';

import logoTagline from '../images/logoTagline.png';
// if the above line fails, use the below line: 
// const logoTagline = require('./logoTagline.png');

export default function Header () {
  return (
    <div className="headerNav">
      <div className="banner">
        <img src={logoTagline} id="logoTagline" alt="logo" />
      </div>
      
    </div> 
  )
}
