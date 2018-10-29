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

  // componentDidMount executes before data is retrieved, 
  // so use both DidMount and DidUpdate to get data 
  // runs first
  componentDidMount() {
    // Use the && to prevent logging out ~jonw.
    // IF ALREADY AUTHENTICATED, call getDebt/getPrepayments
    if (this.props.user.user_id && this.props.user.user_id) {
      this.props.getPrepayments(this.props.user.user_id);
      this.props.getDebts(this.props.user.user_id);
    }
  }
  // runs second
  componentDidUpdate(prevProps) {
    // IF AWAITING AUTHENTICATION, call getDebt/getPrepayments
    if (this.props.isAuthenticated && !prevProps.isAuthenticated) {
      this.props.getPrepayments(this.props.user.user_id);
      this.props.getDebts(this.props.user.user_id);
    }
  }

  render() {
    // console.log("THIS.PROPS", this.props)
    return (
      // {this.props.isLoading ? ( <img src="https://editionsdelarose.com/wp-content/themes/edr/img/loading.gif" /> ) : null}

      // render only after getPrepayments & getDebts are exe: 
      this.props.gotPrepayments && this.props.gotDebts ? 

      <div className="calculator-page">
      
        <br />
        <br />

        <div> {this.props.user.user_id || `NO USER ID`} </div>
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
