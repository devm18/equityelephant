import React, { Component } from 'react';
import { connect } from "react-redux";
import '../ducks/CalculatorReducer';

import Debt from './Debt'; 
import { addDebt } from '../ducks/CalculatorReducer';

class AddDebt extends Component {

  render() {
    return (
      <div className="addDebt">
      
        { this.props.addDebt }
      
        <button 
        onClick={ () => this.props.addDebt(
          <Debt sequenceNumber={this.props.sequenceNumber} />
          ) } 
        > 
        Add debt
        </button>
          
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt })(AddDebt);

