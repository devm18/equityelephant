import React from 'react';


class addOneTimePrepayment extends Component {
  addOneTimePrepayment = () => {
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

export class addOneTimePrepayment(); 
  