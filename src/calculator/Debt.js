import React, { Component } from "react";
import { connect } from "react-redux";
import { onChangeHandlerDebt, removeDebt } from "../ducks/CalcReducer";

class Debt extends Component {
  
  render() {
    // console.log('THIS.PROPS',this.props.key2);

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
            index={this.props.index}
            name="debt_name"
            onChange={e =>
              onChangeHandlerDebt(this.props.index, e.target.name, e.target.value)
            } // The onChange cannot directly change value bc the index is coming from debt.map. So use placeholder instead.  
            // value={this.props.debts[this.props.index].debt_name} 
            placeholder={this.props.debts[this.props.index].debt_name}
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
            } // The onChange cannot directly change value bc the index is coming from debt.map. So use placeholder instead.  
            // value={this.props.debts[this.props.index].beg_bal}
            placeholder={this.props.debts[this.props.index].beg_bal}
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Interest Rate:</label>
          <input
            type="number"
            className="input inputNumber"
            index={this.props.index}
            name="rate"
            onChange={e =>
              onChangeHandlerDebt(e.target.index, e.target.name, e.target.value)
            } // The onChange cannot directly change value bc the index is coming from debt.map. So use placeholder instead.  
            // value={this.props.debts[this.props.index].rate}
            placeholder={this.props.debts[this.props.index].rate}

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
            } // The onChange cannot directly change value bc the index is coming from debt.map. So use placeholder instead.  
            // value={this.props.debts[this.props.index].mpmt}
            placeholder={this.props.debts[this.props.index].mpmt} 
          />
        </div>

        <div className="boxRow">
          <label className="boxRowTextLeft">Term:</label>
          <output className="term">
            {this.props.debts[this.props.index].term}
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
