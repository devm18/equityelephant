import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebt, removeDebt } from "../ducks/CalcReducer";

class Debt extends Component {
  render() {
    console.log(this.props.debts);

    return (
      <div className="box">
        <div className="boxRow ">
          <button
            className="boxRoxTextLeft removeDebt"
            onClick={() => {
              this.props.removeDebt(this.props.userId, this.props.debtId);
            }}
          >
            X
          </button>
          <output
            className="sequence-number"
            value={this.props.key2}
            key2={this.props.key2}
            name="key2"
          >
            {this.props.key2 + 1}
          </output>
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Debt:</label>
          <input
            type="text"
            className="input inputName"
            placeholder="name of debt"
            value={this.props.beg_bal}
            autoFocus
            name="debtName"
            onChange={e => onChangeHandlerDebt(e.target.name, e.target.value)}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Balance:</label>
          <input
            type="number"
            className="input inputNumber"
            value={this.props.beg_bal}
            name="begBal"
            onChange={e => onChangeHandlerDebt(e.target.name, e.target.value)}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Interest Rate:</label>
          <input
            type="number"
            className="input inputNumber"
            value={this.props.rate}
            name="rate"
            onChange={e => onChangeHandlerDebt(e.target.name, e.target.value)}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Monthly Payment:</label>
          <input
            type="number"
            className="input inputNumber"
            value={this.props.mpmt}
            name="mPmt"
            onChange={e => onChangeHandlerDebt(e.target.name, e.target.value)}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft" term={this.props.debts.term}>
            Term:
          </label>
          <output className="term">
            {/* needs fixin:  */}
            {/* { this.props.debts[this.props.key2].term } */}
          </output>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { onChangeHandlerDebt, removeDebt }
)(Debt);
