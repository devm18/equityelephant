import React, { Component } from 'react';
import { connect } from "react-redux";
import { onChangeHandlerDebt, removeDebt } from '../ducks/CalcReducer';

class Debt extends Component {
  // NEED TO assign a index and/or seqNum to each input field !!! 
  // NEEDS FIXIN: dragNdrop doesnt work, the object just return to old positions: This is clear when you enter a debtName or balance. 

  render() {  
    return (
      <div className="box" > 

          <div className="boxRow ">
            <button 
              className="boxRoxTextLeft removeDebt" 
              onClick={ () => this.props.removeDebt(this.props.i) } >
              X 
              </button> 
            <output 
              className="sequence-number"
              value={ this.props.seqNum } 
              seqNum={null}
              name="seqNum"
              >
              {/* { this.props.seqNum }  */}
              {/* seqNum DOES NOT WORK YET, SO USE key2 + 1 */}
              { this.props.key2 + 1 } 
              </output>  
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">
              Debt:
              </label>
            <input 
              type="text" 
              className="input inputName"
              value={ this.props.debts.debtName }
              placeholder="name of debt"
              autoFocus
              seqNum={null}
              name="debtName"
              onChange={(e) => onChangeHandlerDebt(e.target.name, e.target.value) } /> 
          </div> 
          
          <div className="boxRow">
            <label className="boxRowTextLeft">
              Balance:
              </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={this.props.debts.begBal}
              seqNum={null}
              name="begBal"
              onChange={(e) => onChangeHandlerDebt(e.target.name, e.target.value) } />
          </div>  

          <div className="boxRow">
            <label className="boxRowTextLeft">
             Interest Rate:
              </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={ this.props.debts.rate } 
              seqNum={null}
              name="rate"
              onChange={(e) => onChangeHandlerDebt(e.target.name, e.target.value) } /> 
          </div>  

          <div className="boxRow">
            <label className="boxRowTextLeft">
              Monthly Payment:
              </label>
            <input 
              type="number" 
              className="input inputNumber" 
              value={this.props.debts.mPmt} 
              seqNum={null}
              name="mPmt"
              onChange={(e) => onChangeHandlerDebt(e.target.name, e.target.value) } />
          </div>  
          
          <div className="boxRow">
            <label className="boxRowTextLeft">
              Term:
              </label>
            <output 
            className="term">
              {/* needs fixin:  */}
              {/* { this.props.debts[this.props.key2].term } */}
            </output>
          </div>   

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onChangeHandlerDebt, removeDebt })(Debt);

