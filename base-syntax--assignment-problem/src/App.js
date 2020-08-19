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

  render() {
    return (
      <div className="App">
        <ol>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput/>
        <UserOutput userName = {this.state.users[0].userName}/>
        <UserOutput userName = {this.state.users[1].userName}/>
        <UserOutput userName = {this.state.users[2].userName}/>
      </div>
    );
  }
}

export default App;
