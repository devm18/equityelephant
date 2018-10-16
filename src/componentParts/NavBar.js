import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <nav className="NavBar">
      <Link to="/" className="links navbar">Home</Link>
      <Link to="/articles" className="links navbar">Articles</Link>
      <Link to="/glossary" className="links navbar">Glossary</Link>
      <Link to="/about" className="links navbar">About</Link>
      {/* <Link to="/about/contact" className="links">Contact</Link> */}
      <Link to="/calculator" className="links navbar">Calculator</Link>
      <Link to="/login" className="links navbar">Login</Link>
    </nav>
  )
}

          

