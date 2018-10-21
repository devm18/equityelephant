import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

class SaveInputs extends Component {

  saveInputs = (
    monthlyPrepayment,
    yearlyPrepayment,
    yearlyPrepaymentDate,
    oneTimePrepayment,
    oneTimePrepaymentDate
    ) => {
      axios.post('/inputs', {
        monthlyPrepayment,
        yearlyPrepayment,
        yearlyPrepaymentDate,
        oneTimePrepayment,
        oneTimePrepaymentDate 
      })
      // .then(() => this.props. )
    }

  render() {
    

    return (
      <div className="calc-page-buttons">
        <button 
          className="save-inputs"
          onClick={ () => this.saveInputs(
            this.props.monthlyPrepayment,
            this.props.yearlyPrepayment,
            this.props.yearlyPrepaymentDate,
            this.props.oneTimePrepayment,
            this.props.oneTimePrepaymentDate
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
