import React, { Component } from 'react';
import './App.css';
import ValidationCompoment from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    textInput: '',
    textLength: 0,
    textValidation: ''
  }

  inputLength = (event) => {
    this.setState({textInput: event.target.value, textLength: event.target.value.length})
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div >
        <input type="text" onChange={this.inputLength} value={this.state.textInput}/>
        <p>Text Length: {this.state.textLength}</p>
        <ValidationCompoment inputLength={this.state.textLength}/>
        </div>
      </div>
    );
  }
}

export default App;
