import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getObj = () => {
   fetch('/obj').then(res => {
     let message = res.body.getReader();
     console.log(message)
   });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.getObj()}
      </div>
    );
  }
}

export default App;
