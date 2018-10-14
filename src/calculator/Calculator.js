import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prepayments from './Prepayments';
import Debts from './Debts';
// import TotalDebt from './TotalDebt'; 

class Calculator extends Component {
  render() {        
    console.log('UI this.props: ', this.props); 

    return (
      <div className="main">
        <br /> 
        <div>INPUTS: </div>  

        <Prepayments />

        {/* <div> Debts: </div><br /> */} 

        <Debts /> 

        {/* <TotalDebt /> 
        Total debt: 
        Monthly cost: 
        Payoff date:
        */}

        

        {/* <SaveInputs /> */}

        <br /> 

        <div>RESULTS: </div>  
        
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculator);

