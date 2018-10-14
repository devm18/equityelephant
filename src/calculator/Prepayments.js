import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterMonthlyPrepayment, enterYearlyPrepayment, enterYearlyPrepaymentMonth, enterOneTimePrepayment, enterOneTimePrepaymentDate } from '../ducks/CalculatorReducer';

class Prepayments extends Component {

  render() {
    const { 
      enterMonthlyPrepayment,
      enterYearlyPrepayment,
      enterYearlyPrepaymentMonth,
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
          <p className="prepaymentText">Monthly prepayment:</p>
          <input type="number" className="input inputNumber" onChange={ (e)=>enterMonthlyPrepayment(e.target.value) } />
        </div>
        
        <div className="textAndInput">
          <p className="prepaymentText">Yearly prepayment:</p>
          <input type="number" className="input inputNumber" onChange={ (e)=>enterYearlyPrepayment(e.target.value) } />
        </div>
        
        <div className="textAndInput">
          <p className="prepaymentText">Apply month:</p> 
          <input type="date" 
            className="input inputDate"
            min={today} max={maxDate}
            onChange={ (e)=>enterYearlyPrepaymentMonth(e.target.value) } /> 
        </div>
        

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

export default connect(mapStateToProps, { enterMonthlyPrepayment, enterYearlyPrepayment, enterYearlyPrepaymentMonth, enterOneTimePrepayment, enterOneTimePrepaymentDate
})(Prepayments);

