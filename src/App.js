import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <Nav />
    );
  }
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {viewName: 'home'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(state => ({ viewName: 'about' }));
  } 

  render() {
    return (
      <div className="Nav-container">
        <button className="Nav-button" onClick={this.handleClick('home')}>
          Home
        </button>
        <button className="Nav-button" onClick={this.handleClick('work')}>
          Work
        </button>
        <button className="Nav-button" onClick={this.handleClick('about')}>
          About
        </button>
        <button className="Nav-button" onClick={this.handleClick('contact')}>
          Contact
        </button>
        <div>{this.state.viewName}</div>
      </div>
    );
  }
}


export default App;