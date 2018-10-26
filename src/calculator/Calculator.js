import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import { getPrepayments, getDebts, removeDebt } from "../ducks/CalcReducer";
import Prepayments from "./Prepayments";
import Debts from "./Debts";
import SaveInputs from "./SaveInputs";
import AddDebt from "./AddDebt";
import Calculate from "./Calculate";
import Results from "./Results";

class Calculator extends Component {
  // will run first
  componentDidMount() {
    // Use the && to prevent logging out ~jonw.
    // if(this.props.user.userId) {
    // IF ALREADY AUTHENTICATED, to exe the call for getDebt/getPrepayments
    if (this.props.user.userId && this.props.user.userId) {
      this.props.getPrepayments(this.props.user.userId);
      this.props.getDebts(this.props.user.userId);
    }
  }

  // will run second
  componentDidUpdate(prevProps) {
    // Use the && to prevent logging out ~jonw.
    // if(this.props.user.userId) {
    // IF AWAITING AUTHENTICATION,
    if (this.props.isAuthenticated && !prevProps.isAuthenticated) {
      this.props.getPrepayments(this.props.user.userId);
      this.props.getDebts(this.props.user.userId);
    }
  }

  render() {
    return (
      // conditional render page until getPrepayments and getDebts are complete
      this.props.gotPrepayments && this.props.gotDebts ? 

      <div className="calculator-page">
      
        <br />
        <br />

        <div> {this.props.user.userId || `NO USER ID`} </div>
        <br />
        <div>PREPAYMENTS: </div>

        
        
        
        <Prepayments />

        <div> DEBTS: </div>

        <Debts />

        <div className="addDebt-saveInput-Save&Calc">
          <br />

          <AddDebt />

          <SaveInputs />

          <Calculate />
        </div>

        <br />

        <div> RESULTS: </div>

        <Results />

        
        </div>
      : null 
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getPrepayments, getDebts }
)(Calculator);
