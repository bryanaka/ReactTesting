import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Testing />
        <Button />
      </div>
    );
  }
}

class Testing extends Component {
  constructor(props) {
    super(props);
    this.name = "Case Van Arkel";
  }

  componentDidMount() {
    alert("Mounted!");
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Testing">My name is {this.name}.</div>
    );
  }
}

class Button extends Component {
  function alertTesting {
    alert("Clicked!");
  }

  render() {
    return (
      <button onClick={alertTesting}>Click me!</button>
    );
  }
}

export default App;