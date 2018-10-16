import React, { Component } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Debt from './Debt';
import { addDebt, removeDebt } from '../ducks/CalculatorReducer';

class Debts extends Component {
  // constructor(){
  //   super(); 
  //   this.state = {}; 
  // }

  // firstDebt = () => this.props.debts.length ? addDebt() : null;
  // componentDidMount() 


  render() {
    let { removeDebt, addDebt } = this.props; 
    
    let debtsList = this.props.debts.map((elem,i)=>{
      return(  
        <Debt 
        key={i} 
        key2={i}
        id={'debt'+i+1} 
        draggable='true' ondragstart="drag(event)"
        removeDebtButtonEtc={
          <div className="boxRowRemDebtSeqNum">    
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

    let dndDebtsList = () => debtsList.map((e, i) => e );

    let addDebtButton = () => {
        if (this.props.debts.length >= 10) {
          return <p> Maximum of ten debts. </p> 
        } else if (this.props.debts.length === 0) { 
          addDebt(); 
          return ( 
            <button onClick={ addDebt }> 
            Add debt </button> 
          )
        } else {
          return ( 
            <button onClick={ this.props.addDebt }> 
            Add debt </button> 
          )
        }
    }

    return (
      
      <div className="main">
      
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
              >
                {dndDebtsList().map((elem, index) => (
                  <Draggable key={index} draggableId={index} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        { elem }
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        
        { addDebtButton() }
        <br /><br />
        {/* { saveInputsButton() } */}
        {/* { calculate() } */}

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt, removeDebt, })(Debts);
