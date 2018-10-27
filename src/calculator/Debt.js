import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebt, removeDebt } from "../ducks/CalcReducer";

class Debt extends Component {
  
  render() {
    console.log('THIS.PROPS.DEBTS',this.props.debts);
    console.log('THIS.PROPS',this.props);


    return (
      <div className="box">
        <div className="boxRow ">
          <button
            className="boxRoxTextLeft removeDebt"
            onClick={() => { this.props.removeDebt( this.props.userId, this.props.debtId);
       }}
          >
            X
          </button>
          <output
            className="sequence-number"
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
            autoFocus
            placeholder="name of debt"
            key2={this.props.key2}
            name="debtName"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Balance:</label>
          <input
            type="number"
            className="input inputNumber"
            key2={this.props.key2}
            name="begBal"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Interest Rate:</label>
          <input
            type="number"
            className="input inputNumber"
            key2={this.props.key2}
            name="rate"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Monthly Payment:</label>
          <input
            type="number"
            className="input inputNumber"
            key2={this.props.key2}
            name="mPmt"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Term:</label>
          <output className="term">
            {this.props.debts[this.props.key2].term}
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
