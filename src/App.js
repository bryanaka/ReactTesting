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
    this.state = {view: 'home'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(view) {
    if (view == 'home') {
      this.setState(state => ({ view: 'home' }));
    }
    else if (view == 'work') {
      this.setState(state => ({ view: 'work' }));
    }
    else if (view == 'about') {
      this.setState(state => ({ view: 'about' }));
    }
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
      </div>
      <div>{this.state.view}</div>
    );
  }
}


export default App;