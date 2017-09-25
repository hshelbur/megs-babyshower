import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './layout/navbar.js';
import Home from './pages/home.js';
import RSVP from './pages/rsvp.js';
import Registry from './pages/registry.js'

class App extends Component {
  render() {
    return (
        <Router>
          <div>

            <Nav />
            <body className="container">

                  <Route exact path="/" render={() =>           
                      <Home />
                    } />

                  <Route path="/rsvp" render={() =>           
                      <RSVP />
                    } />

                  <Route path="/registry" render={() =>
                      <Registry />
                    } />

                  <Route path="/gallery" render={() =>
                      <div></div>
                    } />

                  <Route path="/shower" render={() =>           
                      <div></div>
                    } />


            </body>

          </div>
        </Router>
    );
  }
}

export default App;
