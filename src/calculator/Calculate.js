import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios'; 

class Calculate extends Component {

  render() {
    return (
      <div className="calc-page-buttons">    
        <button 
        className="calculate"
        onClick={ {/* axios call */} }
        >
        Save & Calculate
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculate);


