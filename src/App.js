import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Animations.css';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {viewName: 'home'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);    
  } 

  handleClick(newView) {
    this.setState(state => ({ viewName: newView }));
  }

  render() {
    return (
      <div className="App">
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout="3000"
          transitionEnter={false}
          transitionLeave={false}
        >
          <Body 
                viewName={this.state.viewName} 
                handleClickFromParent={this.handleClick}
          />
        </CSSTransitionGroup>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="Body-container">
        <Nav 
             viewName={this.props.viewName} 
             handleClickFromParent={this.props.handleClickFromParent}
        />
        <Content viewName={this.props.viewName} />
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="Nav-container">
        <NavButton 
              viewName={this.props.viewName} 
              handleClickFromParent={this.props.handleClickFromParent} 
        />
      </div>
    );
  }
}

class NavButton extends Component {

  changeToHomeView() {
    this.props.handleClickFromParent('home');
  }

  changeToAboutView() {
    this.props.handleClickFromParent('about');
  }

  changeToWorkView() {
    this.props.handleClickFromParent('work');
  }

  render() {
    return (
      <div>
        <button className="Nav-button" onClick={this.changeToHomeView.bind(this)}>
          Set to home
        </button>
        <button className="Nav-button" onClick={this.changeToAboutView.bind(this)}>
          Set to about
        </button>
        <button className="Nav-button" onClick={this.changeToWorkView.bind(this)}>
          Set to work
        </button>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    const viewName = this.props.viewName;
    let view;

    if (viewName == 'home') {
      view = <div>Home Content</div>
    } else if (viewName == 'about') {
      view = <div>About Content</div>
    } else if (viewName == 'work') {
      view = <div>Work Content</div>
    }

    return (
      <div>
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout="3000"
          transitionEnter={false}
          transitionLeave={false}
        >
          {view}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;