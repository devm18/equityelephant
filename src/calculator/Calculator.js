import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prepayments from './Prepayments';
import Debts from './Debts';
import Results from './Results';
// import TotalDebt from './TotalDebt'; 

class Calculator extends Component {
  render() {
    console.log('Calculator.this.props: ', this.props); 

    return (
      <div className="main">
        <br /> 
        <div> INPUTS: </div>  

        <Prepayments />

        <div> Debts: </div>
        <Debts /> 

        {/* <TotalDebt /> 
        Total debt: 
        Monthly cost: 
        Payoff date:
        */}        

        {/* <SaveInputs /> */}

        <br /> 
        <div> RESULTS: </div>  
        <Results /> 

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculator);

