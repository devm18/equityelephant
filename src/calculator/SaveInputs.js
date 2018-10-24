import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 
// import { saveInputs } from '../ducks/CalcReducer'; // NEED TO CREATE 

class SaveInputs extends Component {

  saveInputs = (
    userId,
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate,
    debts
    ) => {
      axios.post('/saveInputs', {
        userId,
        monthlyPrepayment,
        yearlyPrepayment,
        yearlyPrepaymentDate,
        oneTimePrepayment,
        oneTimePrepaymentDate,
        debts
      })
      // .then(() => {})
    }

  render() {
    console.log(this.props); 
    return (
      <div className="calc-page-buttons">
        <button 
          className="save-inputs"
          onClick={ () => this.saveInputs(
            this.props.user.userId,
            this.props.monthlyPrepayment,
            this.props.yearlyPrepayment,
            this.props.yearlyPrepaymentDate,
            this.props.oneTimePrepayment,
            this.props.oneTimePrepaymentDate,
            this.props.debts
            )
          } 
        >
          Save Inputs 
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, /* { saveInputs } */)(SaveInputs);
