import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { addDebt, removeDebt } from "../ducks/CalcReducer";
import Debt from "./Debt";

class Debts extends Component {
  componentDidUpdate(prevProps) {
    //console.log('PREVPROPS: ', prevProps.debts);
    //console.log('THIS.PROPS.DEBTS: ', this.props.debts);
  }

  renderContent = () => {
    let debtsList = this.props.debts.map((elem, i) => (
      
        <Debt
          key={i} // redux reserved word
          key2={i}
          index={i}
          user_id={elem.user_id}
          debt_id={elem.debt_id}
          // un-used?:
          debt_name={elem.debt_name}
          beg_bal={elem.beg_bal}
          rate={elem.rate}
          term={elem.term}
          mpmt={elem.mpmt}
        />
        )
    ); 
    return (<>{ debtsList}</>)
  } 

  render() {
    let { debts } = this.props; 
    
    return ( 
      <div className="main">
      
        { debts && debts[0] 
        ? this.renderContent()
        : <div> Loading </div> 
        }
        
      </div>
    )
    

    // Beautiful DnD 
    // let dndDebtsList = () => debtsList.map((e, i) => e);

    // return (
    //   <div className="main">
    //     {/***** BEAUTIFUL-DND except for MY CODE INSERTS *****/}
    //     <DragDropContext onDragEnd={this.onDragEnd}>
    //       <Droppable droppableId="droppable">
    //         {provided => (
    //           <div ref={provided.innerRef}>
    //             {/******** MY CODE INSERT ********/}
    //             {dndDebtsList().map((debtElement, dnd_index) => (
    //               <Draggable
    //                 key={dnd_index} ////
    //                 draggableId={dnd_index}
    //                 index={dnd_index}
    //               >
    //                 {provided => (
    //                   <div
    //                     ref={provided.innerRef}
    //                     {...provided.draggableProps}
    //                     {...provided.dragHandleProps}
    //                   >
    //                     {/******** MY CODE INSERT ********/}
    //                     {debtElement}
    //                   </div>
    //                 )}
    //               </Draggable>
    //             ))}
    //             {provided.placeholder}
    //           </div>
    //         )}
    //       </Droppable>
    //     </DragDropContext>
    //   </div>
    // );


  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps /*, { addDebt, removeDebt } */)(Debts);
