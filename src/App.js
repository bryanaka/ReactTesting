import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Animations.css';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  NotFoundPage,
} from './routes';
import MainNav from './components/MainNav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout="3000"
            transitionEnter={false}
            transitionLeave={false}
          >
            <div className="Body-container">
              <MainNav />
              <div>
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionAppear={true}
                  transitionAppearTimeout="3000"
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    {/* when none of the above match, <NoMatch> will be rendered */}
                    <Route component={NotFoundPage} />
                  </Switch>
                </CSSTransitionGroup>
              </div>
            </div>
          </CSSTransitionGroup>
        </div>
      </Router>
    );
  }
}

export default App;