import React, { Component } from 'react';
import { connect } from "react-redux";
import { addDebt } from '../ducks/CalcReducer';
import Debt from './Debt';

class AddDebt extends Component {

  // addDebtToDB = (userId, seqNum) => {
  //   // axios.post
  //   console.log(seqNum) 
  // }
  
  render() {
    let { addDebt } = this.props; 
    
    let debtName = '', 
    begBal = 0, 
    rate = 0, 
    mPmt = 0, 
    term = '',
    userId = this.props.user.userId,
    seqNum = this.props.debts.length + 1; 
    

    let addDebtButton = () => {
      if (this.props.debts.length === 0) { 
        addDebt(
            {/* debtName,
            begBal,
            rate,
            mPmt,
            term,
            userId,
            seqNum,
            <Debt /> */}
        ); 
        return ( 
          <button 
          onClick={ () => addDebt(
            {/* debtName,
            begBal,
            rate,
            mPmt,
            term,
            userId,
            seqNum,
            <Debt /> */}

          ) } > 
            Add Debt </button> 
        )
      } else {
        return ( 
          <button 
          onClick={
            () => addDebt(
            {/* debtName,
            begBal,
            rate,
            mPmt,
            term,
            userId,
            seqNum,
            <Debt /> */}
            ) } > 
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
