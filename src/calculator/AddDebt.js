import React, { Component } from 'react';
import { connect } from "react-redux";
import { addDebt } from '../ducks/CalcReducer';
import Debt from './Debt';

class AddDebt extends Component {

  render() {
  
    let { addDebt } = this.props; 
    
    let blankDebtObj = {
      userId: this.props.user.userId,
      key2: this.props.debts.length,
      debtName: ' ',
      begBal: 0, 
      rate: 0, 
      mPmt: 0, 
      term: ' '
    }  

    let addDebtButton = () => {
      
      if(this.props.debts.length === 0) { 
        // FIX: 
        // addDebt(blankDebtObj); 
        // It inserts twice before response changes the debts array.
        return ( 
          <button 
          onClick={ () => addDebt(blankDebtObj) } > 
            Add Debt </button> 
        )
      } else {
        return ( 
          <button 
          onClick={
            () => addDebt(blankDebtObj) } > 
            Add Debt </button> 
        )
      }
    }

    return( 
      <div className="calc-page-buttons"> 
        { addDebtButton() }  
      </div> 
      
  
    )
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt })(AddDebt);
