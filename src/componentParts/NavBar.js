import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../ducks/CalculatorReducer';

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
        
        {/* user.isAuthed ? go to calculator : go to login */}
        { this.props.isAuthed
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

        {/* user.isAuthed ? display logout : display login */}
        { this.props.isAuthed
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

/* DOES NOT WORK: 
  href={ process.env.REACT_APP_LOGIN } > Login/Signup </a> 
  href={ process.env.REACT_APP_LOGOUT } > Logout </a>  
*/

