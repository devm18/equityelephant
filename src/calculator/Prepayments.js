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
          name="monthly_prepayment"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) }
          value={this.props.prepayments.monthly_prepayment} 
          />
      </div>
      
            
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Yearly prepayments:</label>
          
        <input 
          type="number" 
          className="input inputNumber" 
          name="yearly_prepayment"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } 
          value={this.props.prepayments.yearly_prepayment} 
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
          name="yearly_prepayment_date"
          onChange={ (e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } 
          value={this.props.prepayments.yearly_prepayment_date} 
          /> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          One time prepayment:</label> 
        <input 
          type="number" 
          className="input inputNumber"
          name="one_time_prepayment"
          onChange={(e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } 
          value={this.props.prepayments.one_time_prepayment}/> 
      </div>
      
      <div className="boxRow">
        <label 
          className="boxRowTextLeft">
          Apply date:</label>  
        <input 
          type="Date"     
          className="input inputDate"
          min={today} max={maxDate}
          name="one_time_prepayment_date"
          onChange={(e) => onChangeHandlerPrepayments(e.target.name, e.target.value) } 
          value={this.props.prepayments.one_time_prepayment_date}
          />   
      </div>
      

    </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { onChangeHandlerPrepayments })(Prepayments);

