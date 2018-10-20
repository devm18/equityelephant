import React, { Component } from 'react';
import { connect } from "react-redux";
import { oneTimePrepayment, oneTimePrepaymentDate } from '../ducks/CalculatorReducer';

class addOneTimePrepayment extends Component {
  
  render() {

    return (
      <div className="oneTimePrepayment">
        <input type="number"  
        value={oneTimePrepayment}
        onChange={(e)=>this.setState({ oneTimePrepayment1: e.target.value })}
        /> one time prepayment

        <input type="date"  
        value={oneTimePrepaymentDate}
        onChange={(e)=>this.setState({ oneTimePrepayment1Date: e.target.value })} /> payment date
      </div>

    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(addOneTimePrepayment);
