import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prepayments from './Prepayments';
import Debts from './Debts';
import SaveInputs from './SaveInputs';
import AddDebt from './AddDebt';
// import Calculate from './Calculate';
import Results from './Results';

class Calculator extends Component {


 /// if user is in session, then render
 // else call login for auth0 

  render() {
    console.log('Calculator.this.props: ', 
    this.props.user 
    ? console.log("true") 
    : console.log("false")); 

    return (
      <div className="calculator-page">
        <br /> 

        <div> PREPAYMENTS: </div>  

        <Prepayments /> 

        <div> DEBTS: </div>
        
        <Debts /> 
        
        <div className="addDebt-saveInput-Save&Calc">
          <AddDebt /> 
          
          <SaveInputs /> 

          {/* <Calculate />  */}
        </div>
        <br /> 
        
        <div className="results-isLoading">
          { this.props.isLoading ? ( 
            <img src="https://editionsdelarose.com/wp-content/themes/edr/img/loading.gif" alt="is loading..."/> 
            ) : null } 

          <div> RESULTS: </div>  

          <Results /> 

        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Calculator);

