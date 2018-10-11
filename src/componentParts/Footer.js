import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer () {
  return (
    <div className="footer-full-width-container">
      
      <div className="footer-center-container">
      
        <div className="footer-links-container">
          
          <Link to="/privacypolicy/privacypolicy" className="links">Privacy Policy</Link>

          <Link to="/termsofuse/termsofuse" className="links">Terms of Use</Link>
        
          <Link to="/about/about" className="links">About</Link>
        </div> 

        <div className="copyright"> 
          Copyright &copy; 2018 Equity Elephant. All Rights Reserved. 
        </div>
      </div>

    </div>

  )
}
