import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChangeHandlerPrepayments } from '../ducks/CalcReducer';

class Prepayments extends Component {
  
  render() {
    console.log("Prepayments.this.props:", this.props) 
    
    const { onChangeHandlerPrepayments } = this.props; 
    
    let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let maxDate = yyyy + 30;
  
    // <form action="The URI of a program that processes the form information." ></form> 

  return (

    <div className="box">
  
      <div className="boxRow">
        <label 
        className="boxRowTextLeft">
        Monthly prepayments:</label>
        <input 
          type="number" 
          className="input inputNumber" 
          value={this.props.prepayments.monthly_prepayment}
          name="monthlyPrepayment"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) }
          />
      </div>
      
      {/*       
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Yearly prepayments:</label>
          
        <input 
          type="number" 
          className="input inputNumber" 
          value={this.props.prepayments.yearly_prepayment}
          name="yearlyPrepayment"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } 
          />
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Apply date:</label> 
        <input 
          type="date" 
          className="input inputDate"
          min={today} max={maxDate}
          value={this.props.prepayments.yearly_prepayment_date}
          name="yearlyPrepaymentDate"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } /> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          One time prepayment:</label> 
        <input 
          type="number" 
          className="input inputNumber"
          value={this.props.prepayments.one_time_prepayment}
          name="oneTimePrepayment"
          onChange={(e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } /> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Apply date:</label>  
        <input 
          type="Date"     
          className="input inputDate"
          min={today} max={maxDate}
          value={this.props.prepayments.one_time_prepayment_date}
          name="oneTimePrepaymentDate"
          onChange={(e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } />   
      </div>
       */}

    </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onChangeHandlerPrepayments })(Prepayments);

