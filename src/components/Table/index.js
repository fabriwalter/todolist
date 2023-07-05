import React, { Component } from "react";

import './Table.css';

class Table extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        tasks: [],
      };
    }

    componentDidMount() {
      if(localStorage.getItem('tarefas') !== null) {
        const tasks = JSON.parse(localStorage.getItem('tarefas'));
        this.setState({ tasks });
      }
    }
  
    render() {
      const { tasks } = this.state;
      console.log(tasks);
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

            {tasks.map((tarefa, index) => (
              <tbody className="tbody">
                <tr key={index} className="table-row-task">
                  <td className="task">{tarefa.task}</td>
                  <td className="duedate">{tarefa.date}</td>
                  <td className="prio">{tarefa.prio}</td>
                  <td className="comments">{tarefa.comment}</td>
                </tr>
              </tbody>
              ))}
          </table>
        </div>
      );
    }
}

export default Table;