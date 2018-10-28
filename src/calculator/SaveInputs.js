import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { saveInputs } from '../ducks/CalcReducer'; 

class SaveInputs extends Component {
  saveInputs = (prepayments, debts) => {
    axios.post("/saveInputs", {
      prepayments,
      debts
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="calc-page-buttons">
        <button
          className="save-inputs"
          onClick={() =>
            this.props.saveInputs(this.props.user.user_id, this.props.prepayments/*, this.props.debts*/)
          }
        >
          Save Inputs
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { saveInputs })(SaveInputs);
