import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="nav-bar">
          <ul className="nav">
            <li><NavLink to={{pathname: "/rsvp"}}>RSVP</NavLink></li>
            <li><NavLink to={{pathname: "/registry"}}>REGISTRY</NavLink></li>
            <li><NavLink to={{pathname: "/guestbook"}}>GUESTBOOK</NavLink></li>
          </ul>
        </nav>
    );
  }
}

export default Nav