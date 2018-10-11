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
      <div className="main">
        
          <div className="inputGroup"> 
            <div className="descAndInput">
              Recurring monthly prepayment:
              <input type="number" className="input inputNumber"
              onChange={ enterRecurringPrepayment } /> 
            </div>

            <div className="descAndInput">
              One time prepayment:  
              <input type="number" className="input inputNumber"
              onChange={ enterOneTimePrepayment } /> 
            </div>  

              <div className="descAndInput">
              One time prepayment entry date:  
              <input type="Date" 
              className="input inputDate"
              min={today} max={maxDate}
              onChange={ enterOneTimePrepaymentDate } 
              /> 
            </div>  
          </div>
      
      </div>
    )
  }


}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { enterRecurringPrepayment, 
  enterOneTimePrepayment, enterOneTimePrepaymentDate
})(Prepayments);

