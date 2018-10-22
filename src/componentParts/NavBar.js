import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../ducks/CalcReducer';

class NavBar extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <nav className="NavBar">
        <Link to="/" className="links navbar">
        Home</Link>
        
        <Link to="/articles" className="links navbar">
        Articles</Link>
        
        <Link to="/glossary" className="links navbar">
        Glossary</Link>
        
        <Link to="/about" className="links navbar">
        About</Link>
        
        {/* <Link to="/about/contact" className="links">
        Contact</Link> */}
        
        {/* user.isAuthenticated ? go to Calculator : go to Login */}
        { this.props.isAuthenticated
        ? (
          <Link to="/calculator" className="links navbar"> 
          Calculator</Link>
          )
        : ( 
          <a 
          href={"http://localhost:3001/login"} 
          className="links navbar"
          name="login" >
          Calculator
          </a> 
          )
        }

        {/* user.isAuthenticated ? display logout : display login */}
        { this.props.isAuthenticated
        ? (
          <a 
          href={"http://localhost:3001/logout"} 
          className="links navbar" 
          name="logout" >
          Logout 
          </a> 
          )
        : ( 
          <a 
          href={"http://localhost:3001/login"} 
          className="links navbar"
          name="login" >
          Login/Signup 
          </a> 
          )
        }
      </nav>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUser })(NavBar);

