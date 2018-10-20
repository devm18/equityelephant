import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInputChange } from '../ducks/CalculatorReducer';

class Prepayments extends Component {

  
  render() {
    // console.log("Prepayments.this.props:", this.props) 
    
    const { handleInputChange } = this.props; 
    
    let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let maxDate = yyyy+30;
  
    // <form action="The URI of a program that processes the form information." ></form> 

  return (

    <div className="box">
  
      <div className="boxRow">
        <label 
        className="boxRowTextLeft">
        Monthly prepayment:</label>
        <input 
          type="number" 
          className="input inputNumber" 
          autoFocus
          name="monthlyPrepayment"
          onChange={ (e) => handleInputChange(e.target.name, e.target.value) }
          />
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Yearly prepayment:</label>
          
        <input 
          type="number" 
          className="input inputNumber" 
          name="yearlyPrepayment"
          onChange={ (e) => handleInputChange(e.target.name, e.target.value) } 
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
          name="yearlyPrepaymentDate"
          onChange={ (e) => handleInputChange(e.target.name, e.target.value) } /> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          One time prepayment:</label> 
        <input 
          type="number" 
          className="input inputNumber"
          name="oneTimePrepayment"
          onChange={(e) => handleInputChange(e.target.name, e.target.value) } /> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Apply date:</label>  
        <input 
          type="Date"     
          className="input inputDate"
          min={today} max={maxDate}
          name="oneTimePrepaymentDate"
          onChange={(e) => handleInputChange(e.target.name, e.target.value) } />   
      </div>

    </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { handleInputChange })(Prepayments);

