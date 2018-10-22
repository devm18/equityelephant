import React, { Component } from 'react';
import { connect } from "react-redux";
import { addDebt } from '../ducks/CalcReducer';

class AddDebt extends Component {

  render() {
    let { addDebt } = this.props; 

    let addDebtButton = () => {
      if (this.props.debts.length === 0) { 
        addDebt(); 
        return ( 
          <button onClick={ addDebt }> 
          Add Debt </button> 
        )
      } else {
        return ( 
          <button onClick={ addDebt }> 
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
