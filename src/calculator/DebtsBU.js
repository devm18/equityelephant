import React, { Component } from 'react';
import { connect } from "react-redux";
import Debt from './Debt';
import { addDebt, removeDebt } from '../ducks/CalculatorReducer';
// import ()

class Debts extends Component {
  render() {
    const { removeDebt } = this.props; 

    //////////////////////
    let debtsList = this.props.debts.map((elem,i)=>{

      let allowDrop = (e) => e.preventDefault(); 
      let drag = (e) => e.dataTransfer.setData("text", e.target.i); 
      let drop = (e) => { 
        e.preventDefault(); 
        let data = e.dataTransfer.getData('text'); 
        e.target.appendChild(document.getElementById(data));
      } 
      //////////////////////
      return(
        
        <Debt 
        key={i} id={'debt'+i+1} 
        draggable='true' ondragstart="drag(event)"
        removeDebtButtonEtc={
          <div className="removeDebtAndSequenceNumber">    
            <button 
              className="removeDebt" 
              onClick={ () => removeDebt(i) }>
              X </button> 
            <div className="sequenceNumber">
              {i+1} </div>
          </div>
        }
        />
      )
    });

    let addDebtButton = () => {
      return (this.props.debts.length >= 10) 
      ? <p>Maximum of ten debts.</p> 
      : <button onClick={ this.props.addDebt }> Add debt </button>
    }
  
    return (
      <div className="main">

        { debtsList }

        { addDebtButton() }
        {/* { saveInputsButton() } */}
        {/* { calculate() } */}

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt, removeDebt })(Debts);

