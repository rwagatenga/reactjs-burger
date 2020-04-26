import React, { Component } from 'react';

import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';
import Validation from './validation/validation';
import Char from './char/char';
import './App.css';

class App extends Component {//function App() {
  state = {
    username: 'Fred',
    userInput: '',
    num: 0
  }

  usernameChangedHandle = (ev) => {
    this.setState({username: ev.target.value});
  };
  countWordsHandle = (ev) => {
    this.setState({userInput: ev.target.value, num: ev.target.value.length});
  };
  deleteHandle = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteHandle(index)}/>
    });
    return (
      <div className="App">
        <UserInput 
          changed={this.usernameChangedHandle}
          currentName={this.state.username}
        />

        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <input 
          type="text"
          onChange={this.countWordsHandle}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInput} />
        {charList}
      </div>
    );
  }
}

export default App;
