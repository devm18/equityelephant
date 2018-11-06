import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebts, removeDebt} from "../ducks/CalcReducer";
import { round, findTerm, exprTermInYearsMonths } from './finFuncsCopy.js'; 

class Debt extends Component {

  render() {
    console.log('DEBT-THIS.PROPS: ',this.props);

    let term = findTerm( 
      this.props.beg_bal,
      this.props.rate, 
      this.props.mpmt); 
    
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
            {this.props.seq_num + 1} &nbsp;
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
                e.target.value,
                term)
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
                e.target.value,
                term)
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
                e.target.value,
                term)
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
                e.target.value,
                term)
            } 
            value={this.props.debts[this.props.seq_num].mpmt}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Term:</label>
          <output className="term">
            { // if term exists, # months, else ...months
            term
            ? exprTermInYearsMonths(term)
            : `...monthly payments`
            } &nbsp;
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
