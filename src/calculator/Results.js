import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    // console.log(this.props)

    return (
      <div className="results">
        <div className="box">
          {/* Include this row for badging: */}
          <div className="boxRow">
            <label className="boxRowTextLeft">User name:</label>
            <output className="boxRowTextRight">{this.props.user.name}</output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">Total debt:</label>
            <output className="boxRowTextRight">
              {this.props.results.total_debt}
            </output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">Original term:</label>
            <output className="boxRowTextRight">
              {this.props.results.original_term}
            </output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">New term:</label>
            <output className="boxRowTextRight">
              {this.props.results.new_term}
            </output>
          </div>

          <br />
          <div className="boxRow">
            <label className="boxRowTextLeft">Original cost:</label>
            <output className="boxRowTextRight">
              {this.props.results.original_cost}
            </output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">New cost:</label>
            <output className="boxRowTextRight">
              {this.props.results.new_cost}
            </output>
          </div>

          <div className="boxRow">
            <label className="boxRowTextLeft">Eliminated cost:</label>
            <output className="boxRowTextRight">
              {this.props.results.eliminated_cost}
            </output>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Results);
