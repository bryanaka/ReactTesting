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

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      <div>This works fine.</div>
    );
  }
}

export default App;