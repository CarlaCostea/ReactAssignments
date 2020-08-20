import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users: [
      {userName: 'Carla'},
      {userName: 'Cristina'},
      {userName: 'Max'}
    ]
  };

  switchUserName = (event) => {
    this.setState({
      users: [
        {userName: 'Carla'},
        {userName: event.target.value},
        {userName: 'Max'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed = {this.switchUserName} name={this.state.users[1].userName}/>
        <UserOutput userName = {this.state.users[0].userName}/>
        <UserOutput userName = {this.state.users[1].userName}/>
        <UserOutput userName = {this.state.users[2].userName}/>
      </div>
    );
  }
}

export default App;
