import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Table from './components/Table';
import Form from './components/Form';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      newDate: '',
      newPrio: '',
      newComment: '',
      tasks: [],
    };
  }

  componentDidMount() {
    if(localStorage.getItem('tarefas') !== null) {
      const tasks = JSON.parse(localStorage.getItem('tarefas'));
      this.setState({ tasks });
    }
  }


  // Shows the form in case the user wants to add a new task
  // --------------------------------------------------------------------
  displayForm = (e) => {
    const divFormVisibility = document.querySelector('#divFormVisibility');
    divFormVisibility.classList.toggle('visibility');
    const divButtonAddVisibility = document.querySelector('#divButtonAddVisibility');
    divButtonAddVisibility.classList.toggle('visibility');
  }


  // Main function responsible for calling out all the other functions when adding a new task.
  // --------------------------------------------------------------------
  addTask = (e) => {
    const { tasks } = this.state;
    e.preventDefault();
    this.getValue();
    this.createElement();
    this.clearInputs(e);

    localStorage.setItem('tarefas', JSON.stringify(tasks))
  }


  // Gets the new information
  // --------------------------------------------------------------------
  getValue = () => {
    let { newTask, newDate, newPrio, newComment, tasks } = this.state;

    tasks.push({
      task: newTask,
      date: newDate,
      prio: newPrio,
      comment: newComment 
    });

    console.log(tasks);

    this.setState({
      tasks: tasks,
    })


  }


  // Function responsible for sending the data to the list
  // --------------------------------------------------------------------
  sendDataToTable(tbody) {
    
    let trow = tbody.children;
    let listOfTds = trow[0].children;

    for (let i = 0; i < listOfTds.length; i++) {
      
      switch (i) {
        case 0:
          listOfTds[i].innerText = this.state.newTask;
          break;
        case 1:
          listOfTds[i].innerText = this.state.newDate;
          break;
        case 2:
          listOfTds[i].innerText = this.state.newPrio;          
          break;
        case 3:
          listOfTds[i].innerText = this.state.newComment;
          break;
        default:
          continue;
      }
    }
  }


  // Function responsible for creating table elements
  // --------------------------------------------------------------------
  createElement = () => {
    const table = document.querySelector('#table');

    const newTBody = document.createElement('tbody');
    newTBody.setAttribute('class', 'tbody');
    const newTR = document.createElement('tr');
    newTR.setAttribute('class', 'table-row-task')
    for (let i = 0; i < 4; i++) {
      let newTD = document.createElement('td');

      switch (i) {
        case 0:
          newTD.setAttribute('class', 'task');
          break;
        case 1:
          newTD.setAttribute('class', 'duedate');
          break;
        case 2:
          newTD.setAttribute('class', 'prio');
          break;
        case 3:
          newTD.setAttribute('class', 'comments');
          break;
        default:
          continue;
      }

      newTR.appendChild(newTD);
    } 
    newTBody.appendChild(newTR);
    table.appendChild(newTBody);
    this.sendDataToTable(newTBody);
  }


  // Clears the form's input
  // --------------------------------------------------------------------

  clearInputs = (e) => {
    const listaDivs = e.target.children;
    
    for (let i = 0; i < listaDivs.length; i++) {
      let eachDiv = listaDivs[i];
      let inputs = eachDiv.lastElementChild;
      inputs.value = '';
    }

    this.displayForm();
  }


  // Grava as novas informações que serão enviadas nas states
  // --------------------------------------------------------------------
  handleChangeAll = (e) => {

    if(e.target.classList.contains('input-task')) {
      this.setState({
        newTask: e.target.value,
      })
    } else if(e.target.classList.contains('input-duedate')) {
      this.setState({
        newDate: e.target.value,
      })
    } else if(e.target.classList.contains('input-prio')) {
      this.setState({
        newPrio: e.target.value,
      })
    } else if(e.target.classList.contains('input-comments')) {
      this.setState({
        newComment: e.target.value,
      })
    }
  };


  render() {

    return(
      <div>
        <Header headline="TO DO LIST" subheading=" - Unlock your productivity potential with this to-do list" />

        <Table id="table"/>
        
        <Form idEnviado="form1" action={this.addTask} change={this.handleChangeAll} selected="" />

        <div className='div-buttons'>
          <div className='div2-button-new'>
            <Button nome="New Task" class="button-new" action={this.displayForm}/>
            <div id='divButtonAddVisibility' className='visibility'>
              <Button nome="Add" class="button-add" type="submit" formEnviado="form1"/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
