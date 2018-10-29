import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { saveInputs, getPrepayments, getDebts } from '../ducks/CalcReducer'; 

class SaveInputs extends Component {
  
  saveInputsAndGetData = () => {
    const { user_id } = this.props.user; 
    this.props.saveInputs(this.props.user.user_id, this.props.prepayments, this.props.debts)
    .then(() => {
      this.props.getPrepayments(user_id);
      this.props.getDebts(user_id);
    })
  }

  render() {
    // console.log(this.props);
    
    return (
      <div className="calc-page-buttons">
        <button
          className="save-inputs"
          onClick={ () => this.saveInputsAndGetData() }
        >
          Save Inputs
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveInputs,getPrepayments, getDebts })(SaveInputs);
