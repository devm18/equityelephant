import React, { Component } from 'react';
import { connect } from "react-redux";

import { enterDebtName, enterPrinciple, enterRate, enterPayment } from '../ducks/CalculatorReducer';

class Debt extends Component {
  
  render() {
    const { enterDebtName, enterPrinciple, enterRate, enterPayment
     } = this.props; 

    return (
      <div className="main">
          <div className="inputGroup"> 
            
            <div className="deleteDebtAndSequenceNumber">
                
                <button 
                className="deleteDebt" 
                onClick={ null }>
                X</button>
                
                <div className="sequenceNumber">
                  { this.props.sequenceNumber }
                </div>
            </div>

            <div className="descAndInput">
              Debt:
              <input type="text" className="input inputText"
              onChange={(e)=> {
                return enterDebtName(e.target.value);
              }} /> 
            </div>

            <div className="descAndInput">
              Principle:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPrinciple(e.target.value)} /> 
            </div>  

            <div className="descAndInput">
              Interest rate:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterRate(e.target.value)} /> 
            </div>  

            <div className="descAndInput">
              Monthly payment:  
              <input type="number" className="input inputNumber"
              onChange={(e)=> enterPayment(e.target.value)} /> 
            </div>  
        
        </div>
      
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Debt);

