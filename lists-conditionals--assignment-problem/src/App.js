import React, { Component } from 'react';
import './App.css';
import ValidationCompoment from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    textInput: '',
    textLength: 0,
  }

  inputLength = (event) => {
    this.setState({textInput: event.target.value, textLength: event.target.value.length})
  }

  deleteCharHandler = (charIndex) => {
    const newText = this.state.textInput.split('')
    newText.splice(charIndex, 1);
    this.setState({textInput: newText.join(''), textLength: this.state.textLength-1})
  }

  render() {   
    const charactersList = this.state.textInput.split('').map((char, charIndex) => {
      return (
        <CharComponent 
        char ={char}
        key = {charIndex}
        click={() => this.deleteCharHandler(charIndex)}/>
      )
    })

    return (
      <div className="App">
        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div >
        <input type="text" onChange={this.inputLength} value={this.state.textInput}/>
        <p>Text Length: {this.state.textLength}</p>
        {charactersList}
        <ValidationCompoment inputLength={this.state.textLength}/>
        </div>
      </div>
    );
  }
}

export default App;
