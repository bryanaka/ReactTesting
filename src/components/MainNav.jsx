import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class MainNav extends Component {
  render() {
    return (
      <div className="Nav-container">
        <div>
          <Link to='/'>
            <button className="Nav-button">
              Set to home
            </button>
          </Link>
          <Link to='/about'>
            <button className="Nav-button">
              Set to about
            </button>
          </Link>
          <button className="Nav-button">
            Set to work
          </button>
        </div>
      </div>
    );
  }
}