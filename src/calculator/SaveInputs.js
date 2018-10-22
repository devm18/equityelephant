import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

class SaveInputs extends Component {

  saveInputs = (
    auth_id,
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate,
    debts
    ) => {
      axios.post('/saveInputs', {
        auth_id,
        monthlyPrepayment,
        yearlyPrepayment,
        yearlyPrepaymentDate,
        oneTimePrepayment,
        oneTimePrepaymentDate,
        debts
      })
      // .then(() => this.props. )
    }

  render() {
    
    return (
      <div className="calc-page-buttons">
        <button 
          className="save-inputs"
          onClick={ () => this.saveInputs(
            this.props.user.auth_id,
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

export default connect(mapStateToProps)(SaveInputs);
