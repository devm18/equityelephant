import React, { Component } from 'react';
import { connect } from "react-redux";
import Debt from './Debt';
import { addDebt, removeDebt } from '../ducks/CalculatorReducer';

class Debts extends Component {

  render() {
    console.log(this.state); 
    //// return at least one Debt field, else list
    // let sequenceNumber = () => {
    //   this.props.debts.map((e,i) => i+1)
    // }
    // if(this.props.debts.length === 0) {
    //   debts = <Debt sequenceNumber="1" /> ; 
    // } else { 
    //   debts = this.props.debts.map((e,i) => {
    //     return (
    //       <Debt key={i+1} sequenceNumber={i} />  
    //     )
    //   })
    // }
  
    return (
      <div className="main">

        {/* { this.state.debts }
        <button onClick={ this.props.addDebt } > 
        Add debt in Debts.js
        </button> */}

        { this.props.debts }
        <button onClick={ this.props.addDebt } > 
        Add debt in redux
        </button>

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt, removeDebt })(Debts);

