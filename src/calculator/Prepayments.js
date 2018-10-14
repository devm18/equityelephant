import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterRecurringPrepayment, enterOneTimePrepayment,
  enterOneTimePrepaymentDate } from '../ducks/CalculatorReducer';

class Prepayments extends Component {

  render() {
    const { 
      enterRecurringPrepayment,
      enterOneTimePrepayment,
      enterOneTimePrepaymentDate
    } = this.props; 
        
    console.log('Prepayments.js this.props: ', this.props); 

    let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let maxDate = yyyy+30;

  return (
      <div className="inputGroup">
           
        <div className="textAndInput" id="recPaypmtRow">
          <p className="prepaymentText">Recurring monthly prepayment:</p>
          <input type="number" className="input inputNumber"
            onChange={ (e)=>enterRecurringPrepayment(e.target.value) } />
        </div>

        {/* ADD_LATER 
        <div className="textAndInput">
          <p className="prepaymentText">Recurring yearly prepayment:</p>
          <input type="number" className="input inputNumber" 
            onChange={ enterRecurringPrepayment } />
          <input type="Date" 
            className="input inputDate"
            min={today} max={maxDate}
            onChange={ enterOneTimePrepaymentDate } /> 
        </div>
         */}

        <div className="textAndInput">
          <p className="prepaymentText">One time prepayment:</p>  
          <input type="number" className="input inputNumber"
            onChange={ (e)=>enterOneTimePrepayment(e.target.value) } /> 
        </div> 
        <div className="textAndInput">
          <p className="prepaymentText">Apply date:</p>  
          <input type="Date" 
              className="input inputDate"
              min={today} max={maxDate}
              onChange={ (e)=>enterOneTimePrepaymentDate(e.target.value) } /> 
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { enterRecurringPrepayment, 
  enterOneTimePrepayment, enterOneTimePrepaymentDate
})(Prepayments);

