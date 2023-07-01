import React, { Component } from "react";

import './Button.css';

class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: this.props.nome,
      }
    } 
  
    render() {
      return(
        
        <div>
            <button onClick={this.props.action} className={this.props.class} type={this.props.type} form={this.props.formEnviado}>{this.state.nome}</button>
        </div>
      );
    }
}

export default Button;