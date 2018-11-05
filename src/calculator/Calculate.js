import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from 'axios';
import { calculate } from "../ducks/CalcReducer";

class Calculate extends Component {
  render() {
    return (
      <div className="calc-page-buttons">
        <button className="calculate" onClick={() => {
          const { prepayments, debts } = this.props;
          this.props.calculate(prepayments, debts);
          }}>
          Save & Calculate
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {calculate})(Calculate);
