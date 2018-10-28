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
            onClick={() => { this.props.removeDebt( this.props.user_id, this.props.debt_id);
       }}
          >
            X
          </button>
          <output
            className="boxRowTextRight sequence-number"
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
            name="debt_name"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
            value={this.props.debts.debt_name}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Balance:</label>
          <input
            type="number"
            className="input inputNumber"
            key2={this.props.key2}
            name="beg_bal"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
            value={this.props.debts.beg_bal}
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
            value={this.props.debts.rate}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Monthly Payment:</label>
          <input
            type="number"
            className="input inputNumber"
            key2={this.props.key2}
            name="mpmt"
            onChange={e =>
              onChangeHandlerDebt(e.target.key2, e.target.name, e.target.value)
            }
            value={this.props.debts.mpmt}
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
