import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prepayments from './Prepayments';
import Debts from './Debts';
// import TotalDebt from './TotalDebt'; 

class SaveInputs extends Component {

  render() {
    return (
      <div className="main">
        
        <button 
        className="save-inputs"
        onClick={()=> {/* axios call */} }>
        Save inputs
        </button>


      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SaveInputs);

