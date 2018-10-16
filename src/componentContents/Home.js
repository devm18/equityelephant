import React from 'react';
import elephantFront from '../assets/elephantFront.png';

export default function Home () {
  return (
    <div className="home">
    <br />
    
    <h2 className="h2-text">Payoff your mortgage and debt in 1/2 to 1/3 the time.</h2>
		<h2 className="h2-text">Save $10s to $100s of thousands of dollars in interest.</h2>

    <img id="elephantFront" src={elephantFront} alt="elephantFront" />
    
    </div> 
  )
}

