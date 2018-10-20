import React, { Component } from 'react';
import { connect } from "react-redux";

import { enterDebtName, enterBegBal, enterRate, enterMonthlyPayment, removeDebt } from '../ducks/CalculatorReducer';

export default class Results extends Component {
  render() {
    return (
      <div className="results">
        <div className="box">

          <div className="boxRow">
            <p className="boxRowTextLeft">
              Total Debt:
            </p>
            <p className="boxRowTextRight">
              { this.props.totalDebt }
            </p>
          </div>
          
          <div className="boxRow">
            <p className="boxRowTextLeft">
              Original term:
            </p>
            <p className="boxRowTextRight">
              { this.props.originalTerm }
            </p>
          </div>

          <div className="boxRow">
            <p className="boxRowTextLeft">
              New term:
            </p>
            <p className="boxRowTextRight">
              { this.props.newTerm }
            </p>
          </div>

          <br /> 
          <div className="boxRow">
            <p className="boxRowTextLeft">
              Original cost:
            </p>
            <p className="boxRowTextRight">
              { this.props.originalCost }
            </p>
          </div>

          <div className="boxRow">
            <p className="boxRowTextLeft">
              New cost:
            </p>
            <p className="boxRowTextRight">
              { this.props.newCost }
            </p>
          </div>

          <div className="boxRow">
            <p className="boxRowTextLeft">
              Eliminated cost:
            </p>
            <p className="boxRowTextRight">
              { this.props.eliminatedCost }
            </p>
          </div>
          
        </div>
      </div>
    )
  }
}