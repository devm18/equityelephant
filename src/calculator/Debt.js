import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInputChange, removeDebt } from '../ducks/CalcReducer';

class Debt extends Component {
  
  render() {
    // console.log("Debt.this.props", this.props); 
        // novalidate 

        // value={this.props.debt_name}
    return (
      <div className="box"> 

          <div className="boxRow ">
              <button 
                className="boxRoxTextLeft removeDebt"
                onClick={ () => this.props.removeDebt(this.props.i) }>
                X 
                </button> 
              <output className="sequence-number">
                { this.props.seqNum } 
              </output>
            </div>
          
        
          <div className="boxRow">
            <label className="boxRowTextLeft">
            Debt:
            </label>
            <input 
              type="text" 
              className="input inputName"
              value={this.props.debts.debtName}
              placeholder="name of debt"
              autoFocus
              name="debtName"
              onChange={(e) => handleInputChange(e.target.name, e.target.value) } /> 
          </div> 
          
          <div className="boxRow">
            <label className="boxRowTextLeft">
            Balance:
            </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={this.props.debts.begBal}
              name="beg-bal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value) } />
          </div>  

          <div className="boxRow">
            <label className="boxRowTextLeft">
            Interest Rate:
            </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={ this.props.debts.rate } 
              name="rate"
              onChange={(e) => handleInputChange(e.target.name, e.target.value) } /> 
          </div>  

          <div className="boxRow">
            <label className="boxRowTextLeft">
            Monthly Payment:
            </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={this.props.debts.mPmt} 
              name="mPmt"
              onChange={(e) => handleInputChange(e.target.name, e.target.value) } /> 
          </div>  
          
          <div className="boxRow">
            <label className="boxRowTextLeft">
            Term:
            </label>
            <output 
            className="debt-term">
              {/* { this.props.debts[this.props.key2].term } */}
            </output>
          </div>   

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { handleInputChange, removeDebt })(Debt);

