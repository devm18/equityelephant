import React, { Component } from 'react';
import { connect } from "react-redux";
import { addDebt } from '../ducks/CalcReducer';
import Debt from './Debt';

class AddDebt extends Component {

  render() {
  
    let { addDebt } = this.props; 
    

    // IDEA: to get the placeholder to work, pass in the a blank <Debt /> component.
    let blankDebtObj = {
      // values are nec to prevent error
      // debt_id will be created by the db. 
      user_id: this.props.user.user_id,
      index: this.props.debts.length,
      debt_name: '',
      beg_bal: 0,
      rate: 0, 
      term: '',
      mpmt: 0
    }  

    let addDebtButton = () => {
      
      if(this.props.debts.length === 0) { 
        // addDebt(blankDebtObj); // NEED TO FIX: it inserts twice before response changes the debts array.
        return ( 
          <button 
          onClick={ 
            () => addDebt(blankDebtObj) } > 
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
