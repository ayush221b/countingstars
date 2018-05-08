import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
    deadLine: "June 3, 2018", 
    };
  }
  render() {
    return (
      <div className="tc helvetica App">
        <div className= "f1 "> Countdown to {this.state.deadLine} </div>
        <br/>
        <Clock deadLine={this.state.deadLine}/>
      </div>
    );
  }
}

export default App;
