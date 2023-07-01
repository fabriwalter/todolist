import React, { Component } from "react";

import './Table.css';

class Table extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      };
    }
  
    render() {
      return(
        <div className="div-table">
          <table className="table" id={this.props.id}>
    
            <thead>
              <tr className='table-row-headers'>
                <th>Task</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Comments</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    }
}

export default Table;