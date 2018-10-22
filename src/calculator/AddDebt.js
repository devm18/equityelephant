import React, { Component } from 'react';
import { connect } from "react-redux";
import { addDebt } from '../ducks/CalcReducer';


class AddDebt extends Component {

    
  addDebtToDB = (userId, seqNumber) => {
    // axios.post
    console.log(seqNumber) 
  }
  
  render() {
    let { addDebt } = this.props; 
    let seqNumber  = this.props.debts.length+1; 

    // console.log(seqNumber)
    // let { seqNum, debtName, begBal, rate, mPmt, term, iPmt, pPmt, prePmt, endBal } = this.props.debts[0]; 

    // VERSION 1
    let addDebtButton = () => {
      return (
        <button 
        onClick={() => { addDebt(); this.addDebtToDB() } } >  
        Add Debt </button> 
      )
    }
    
    // VERSION 2  
    // let addDebtButton = () => {
    //   if (this.props.debts.length === 0) { 
    //     addDebt(); 
    //     return ( 
    //       <button 
    //       onClick={() => {addDebt(); this.addDebtToDB() } } > 
    //       Add Debt </button> 
    //     )
    //   } else {
    //     return ( 
    //       <button 
    //       onClick={() => { addDebt(); this.addDebtToDB() } } > 
    //       Add Debt </button> 
    //     )
    //   }
    // }

    return( 
      <div className="calc-page-buttons"> 
        { addDebtButton() }  
      </div>
    )
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt })(AddDebt);
