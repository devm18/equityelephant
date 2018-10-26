import React, { Component } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { /* addDebt, */ removeDebt } from '../ducks/CalcReducer';
import Debt from './Debt';

class Debts extends Component {


  render() {
    

    let debtsList = this.props.debts.map((elem,i)=>{
      return (  
        <Debt 
          key={i} // redux reserved keyword
          key2={i} 
          // seqNum={ i + 1 } 
          // seqNum={ elem.SeqNum }
          // debtName={ elem.debtName }
          // begBal={ elem.begBal } 
          // rate={ elem.rate } 
          // mPmt={ elem.mPmt } 
          // userId = { elem.userId } 
          // draggable='true' 
          // ondragstart='drag(event)'
        />
      )
    });

    let dndDebtsList = () => debtsList.map((e, i) => e );
    
    return (
      <div className="main">

        {/***** BEAUTIFUL-DND except for MY CODE INSERTS *****/}
        <DragDropContext 
        onDragEnd={this.onDragEnd}>
          
          <Droppable 
          droppableId="droppable">
            {(provided) => (

              <div
                ref={provided.innerRef} >
                
                { /******** MY CODE INSERT ********/ }
                { dndDebtsList().map((debtElement, dnd_index) => (

                  <Draggable 
                  key={dnd_index} //// 
                  draggableId={dnd_index} 
                  index={dnd_index}>

                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps} >
                        
                        {/******** MY CODE INSERT ********/}
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

export default connect(mapStateToProps, { /* addDebt, */ removeDebt })(Debts);
