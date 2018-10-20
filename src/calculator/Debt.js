import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInputChange } from '../ducks/CalculatorReducer';

class Debt extends Component {
  
  render() {
    // console.log("Debt.this.props", this.props); 

        {/* novalidate  */}  

    return (
      <div className="box"> 

        {/* <form 
        action=""
        method="post"
        > */}

          { this.props.debtBoxTopRow } 
        
          <div className="boxRow">
            <label className="boxRowTextLeft">
            Debt:
            </label>
            <input 
              type="text" 
              className="input inputName"
              placeholder="name of debt"
              value={this.props.debt_name}
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
              value={this.props.debts.beg_bal}
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
              value={this.props.debts.mpmt} 
              name="mpmt"
              onChange={(e) => handleInputChange(e.target.name, e.target.value) } /> 
          </div>  
          
          <div className="boxRow">
            <label className="boxRowTextLeft">
            Term:
            </label>
            <output className="debt-term">
              { this.props.debts[this.props.key2].term }
            </output>
          </div>   
          {/* 
          ALT: 
          <div className="boxRow">
            <span align='left'> 
              Term: </span> 
            <span align='right'> 
              { this.props.debts[this.props.key2].term }
            </span>
          </div> 
          */}

        {/* </form> */}

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { handleInputChange })(Debt);

