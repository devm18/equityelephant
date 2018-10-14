import React, { Component } from 'react';
import { connect } from "react-redux";

import { enterDebtName, enterPrinciple, enterRate, enterPayment, removeDebt } from '../ducks/CalculatorReducer';

class Debt extends Component {
  
  render() {
    // console.log("Debt.this.props", this.props); 
     
    const { enterDebtName, enterPrinciple, enterRate, enterPayment } = this.props; 

    return (
      <div className="debtInputWrapper">
          <div className="debtInputGroup"> 

            { this.props.removeDebtButtonEtc }

            <div className="debtDescAndInput">
              Debt:
              <input type="text" className="input inputText"
              onChange={(e)=> {
                return enterDebtName(e.target.value);
              }} /> 
            </div>

            <div className="debtDescAndInput">
              Principle:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPrinciple(e.target.value)} /> 
            </div>  

            <div className="debtDescAndInput">
              Interest rate:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterRate(e.target.value)} /> 
            </div>  

            <div className="debtDescAndInput">
              Monthly payment:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPayment(e.target.value)} /> 
            </div>  
            
            <div className="debtDescAndInput">
              <span align='left'> Term (in years):</span> 
              <span align='right'> {  } </span> 
            </div>  
            

        </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Debt);

