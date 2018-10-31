import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebts, removeDebt} from "../ducks/CalcReducer";

class Debt extends Component {

  

  render() {
    console.log('DEBT-THIS.PROPS: ',this.props);

    return (
      <div className="box">
        <div className="boxRow ">
          <button
            className="boxRoxTextLeft removeDebt"
            onClick={() => this.props.removeDebt( this.props.user_id, 
            this.props.debt_id)}
          >
            X
          </button>
          <output
            className="boxRowTextRight sequence-number"
            seq_num={this.props.seq_num}
            name="seq_num"
          >
            {this.props.seq_num + 1} &nbsp;&nbsp;
          </output>
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Debt:</label>
          <input
            type="text"
            className="input inputName"
            autoFocus
            placeholder='debt name...'
            name="debt_name"
            onChange={e =>
              this.props.onChangeHandlerDebts(
                this.props.seq_num, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.seq_num].debt_name} 
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Balance:</label>
          <input
            type="number"
            className="input inputNumber"
            name="beg_bal"
            onChange={e =>
              this.props.onChangeHandlerDebts(
                this.props.seq_num, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.seq_num].beg_bal}
            
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Interest Rate:</label>
          <input
            type="number"
            className="input inputNumber"
            name="rate"
            onChange={e =>
              this.props.onChangeHandlerDebts(
                this.props.seq_num, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.seq_num].rate}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Monthly Payment:</label>
          <input
            type="number"
            className="input inputNumber"
            name="mpmt"
            onChange={e =>
              this.props.onChangeHandlerDebts(
                this.props.seq_num, 
                e.target.name, 
                e.target.value)
            } 
            value={this.props.debts[this.props.seq_num].mpmt}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Term:</label>
          <output className="term">
            { this.props.debts[this.props.seq_num].term 
            ? `${this.props.debts[this.props.seq_num].term} months `
            : `... months`} &nbsp;&nbsp;&nbsp;
          </output>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { onChangeHandlerDebts, removeDebt }
)(Debt);
