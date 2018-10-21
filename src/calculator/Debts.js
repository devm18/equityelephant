import React, { Component } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { addDebt, removeDebt } from '../ducks/CalcReducer';
import Debt from './Debt';

class Debts extends Component {

  render() {
  
    // let { debtName, beg_bal, rate, payment, term } = this.props.debts[index]; 
    
    // debtName={ this.props.debts[i].elem.debtName } 

    let debtsList = this.props.debts.map((elem,i)=>{
      
      return (  
        <Debt 
          key={i} 
          key3={i}
          id={'debt'+i+1} 
          
          beg_bal={ elem.beg_bal } 
          rate={ elem.rate } 
          payment={ elem.mpmt } 
          draggable='true' ondragstart="drag(event)"
          debtBoxTopRow={
            <div className="boxRow ">
              <button 
                className="boxRoxTextLeft removeDebt"
                onClick={ () => this.props.removeDebt(i) }>
                X 
                </button> 
              <output className="sequence-number">
                {i+1} 
              </output>
            </div>
          }
          


        />
      )
    });

    let dndDebtsList = () => debtsList.map((e, i) => e );

    return (
      <div className="main">
      
        <DragDropContext 
        onDragEnd={this.onDragEnd}>
          
          <Droppable 
          droppableId="droppable">
            {(provided) => (

              <div
                ref={provided.innerRef} >
                {dndDebtsList().map((debtElement, index) => (
                  
                  <Draggable 
                  key={index} 
                  draggableId={index} 
                  index={index}>

                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        { debtElement }
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addDebt, removeDebt })(Debts);
