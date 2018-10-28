import React, { Component } from "react";
import { connect } from "react-redux";

import {
  enterDebtName,
  enterBegBal,
  enterRate,
  enterMonthlyPayment,
  removeDebt
} from "../ducks/CalcReducer";

export default class Results extends Component {
  render() {
    return (
      <div className="results">
        <div className="box">
          <div className="boxRow">
            <label className="boxRowTextLeft">Total debt:</label>
            <output className="boxRowTextRight">{this.props.total_debt}</output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">Original term:</label>
            <output className="boxRowTextRight">
              {this.props.original_term}
            </output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">New term:</label>
            <output className="boxRowTextRight">{this.props.new_term}</output>
          </div>

          <br />
          <div className="boxRow">
            <label className="boxRowTextLeft">Original cost:</label>
            <output className="boxRowTextRight">{this.props.original_cost}</output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">New cost:</label>
            <output className="boxRowTextRight">{this.props.new_cost}</output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">Eliminated cost:</label>
            <output className="boxRowTextRight">{this.props.eliminated_cost}</output>
          </div>
        </div>
      </div>
    );
  }
}
