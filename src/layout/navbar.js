import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="nav-bar">
          <ul>
            <li><NavLink to={{pathname: "/rsvp"}}>RSVP</NavLink></li>
            <li><NavLink to={{pathname: "/registry"}}>REGISTRY</NavLink></li>
            <li><NavLink to={{pathname: "/gallery"}}>GALLERY</NavLink></li>
            <li><NavLink to={{pathname: "/shower"}}>SHOWER</NavLink></li>
          </ul>
        </nav>
    );
  }
}

export default Nav