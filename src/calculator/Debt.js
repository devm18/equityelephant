import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebt, removeDebt } from "../ducks/CalcReducer";

class Debt extends Component {
  
  render() {
    console.log('THIS.PROPS: ',this.props);

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
            index={this.props.index}
            name="index"
          >
            {this.props.index + 1}
          </output>
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Debt:</label>
          <input
            type="text"
            className="input inputName"
            autoFocus
            name="debt_name"
            onChange={e =>
              this.props.onChangeHandlerDebt(
                this.props.index, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.index].debt_name} 
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Balance:</label>
          <input
            type="number"
            className="input inputNumber"
            name="beg_bal"
            onChange={e =>
              this.props.onChangeHandlerDebt(
                this.props.index, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.index].beg_bal}
            
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Interest Rate:</label>
          <input
            type="number"
            className="input inputNumber"
            name="rate"
            onChange={e =>
              this.props.onChangeHandlerDebt(
                this.props.index, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.index].rate}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Monthly Payment:</label>
          <input
            type="number"
            className="input inputNumber"
            name="mpmt"
            onChange={e =>
              this.props.onChangeHandlerDebt(
                this.props.index, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.index].mpmt}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Term:</label>
          <output className="term">
            {`${this.props.debts[this.props.index].term} months `}
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
