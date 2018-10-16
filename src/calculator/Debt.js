import React, { Component } from 'react';
import { connect } from "react-redux";

import { enterDebtName, enterPrinciple, enterRate, enterPayment, removeDebt } from '../ducks/CalculatorReducer';

class Debt extends Component {
  
  render() {
    // console.log("Debt.this.props", this.props); 
     
    const { enterDebtName, enterPrinciple, enterRate, enterPayment } = this.props; 

    return (
      <div className="debtInputWrapper">
          <div className="box"> 

            { this.props.removeDebtButtonEtc }

            <div className="boxRow">
              <p className="boxRowTextLeft">Debt:</p>
              <input type="text" className="input inputText"
              onChange={(e)=> {
                return enterDebtName(e.target.value);
              }} /> 
            </div>

            <div className="boxRow">
              <p className="boxRowTextLeft">Principle:</p>
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPrinciple(e.target.value)} /> 
            </div>  

            <div className="boxRow">
              <p className="boxRowTextLeft">Interest rate:</p>
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterRate(e.target.value)} /> 
            </div>  

            <div className="boxRow">
              <p className="boxRowTextLeft">Monthly payment:</p>
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPayment(e.target.value)} /> 
            </div>  
            
            <div className="boxRow">
              <span align='left'> Term:</span> 
              <span align='right'> 
                { this.props.debts[this.props.key2].term }
              </span> 
            </div>  

        </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Debt);

