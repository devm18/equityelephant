import React, { Component } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Debt from './Debt';
import { addDebt, removeDebt } from '../ducks/CalculatorReducer';
// import ()

class Debts extends Component {

  //////////////////////////////////////////////////////////////////
  // UPDATE SEQUENCE   
  // const grid = 8;
  
  // const getItemStyle = (isDragging, draggableStyle) => ({
  //   // some basic styles to make the items look a bit nicer
  //   userSelect: 'none',
  //   padding: grid * 2,
  //   margin: `0 0 ${grid}px 0`,
  //   background: isDragging ? 'lightgreen' : 'grey',
  //   // styles we need to apply on draggable
  //   ...draggableStyle,
  // });
  
  // const getListStyle = isDraggingOver => ({
  //   background: isDraggingOver ? 'lightblue' : 'lightgrey',
  //   padding: grid,
  //   width: 250,
  // });

  // const reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };
  
  // const onDragEnd = (result) => {
  //   // if dropped outside the list
  //   if (!result.destination) { return; }

  //   const debtsReordered = reorder(
  //     debtsList,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   this.props.updateSequence(debtsReordered);
  // }
  //////////////////////////////////////////////////////////////////

  render() {
    const { removeDebt } = this.props; 
   
    let debtsList = this.props.debts.map((elem,i)=>{
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
    // dndDebtsList === [ <Debt ... /> ]
    let dndDebtsList = () => {
      return debtsList.map((dndDebtElem, dndDebtIndex)=> {
        return dndDebtElem 
      });
    }

    let addDebtButton = () => {
      return (this.props.debts.length >= 10) 
      ? <p>Maximum of ten debts.</p> 
      : <button onClick={ this.props.addDebt }> Add debt </button>
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
                        {elem}
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
        {/* { saveInputsButton() } */}
        {/* { calculate() } */}

      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt, removeDebt })(Debts);
