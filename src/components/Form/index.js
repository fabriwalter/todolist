import React, { Component } from "react";

import './Form.css';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return(
        <div className='visibility' id="divFormVisibility">
  
          <div className='div-input'>
            
            
            <form className='form' id={this.props.idEnviado} name="form1" onSubmit={this.props.action}>
              
              
              <div className='div-task'>
                <label>Task:</label>
                <input className='input-task' type='text' placeholder='' name="task" onChange={this.props.change}></input>
              </div>
  
  
              <div className='div-duedate'>
                <label>Due Date:</label>
                <input className='input-duedate' type='date' name="duedate" onChange={this.props.change}></input>
              </div>
  
  
              <div className='div-prio'>
                <label>Priority:</label>
                <select className='input-prio' type='select' name="prio" placeholder="" onChange={this.props.change} defaultValue={this.props.selected}>
                  <option></option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>

                </select>
              </div>
  
  
              <div className='div-comments'>
                <label>Comments:</label>
                <input className='input-comments' type='text' name="comments" onChange={this.props.change}></input>
              </div>
            </form>
  
          </div>
        </div>
      );
    }
}

export default Form;