import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <nav className="NavBar">
      <Link to="/" className="links">Home</Link>
      <Link to="/articles" className="links">Articles</Link>
      <Link to="/glossary" className="links">Glossary</Link>
      <Link to="/about" className="links">About</Link>
      {/* <Link to="/about/contact" className="links">Contact</Link> */}
      <Link to="/calculator" className="links">Calculator</Link>
      <Link to="/login" className="links">Login</Link>
    </nav>
  )
}

          

