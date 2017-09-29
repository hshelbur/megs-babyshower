import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './layout/navbar.js';
import Home from './pages/home.js';
import RSVP from './pages/rsvp.js';
import Registry from './pages/registry.js'
import Guestbook from './pages/guestbook.js'
import MessageBox from './components/MessageBox'
import MessageList from './components/MessageList'
import firebase from 'firebase';

class App extends Component {

  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyA30-tYESVlhFGgSDxz3Bho4WLN4WjUuQw",
    authDomain: "megs-babyshower.firebaseapp.com",
    databaseURL: "https://megs-babyshower.firebaseio.com",
    projectId: "megs-babyshower",
    storageBucket: "",
    messagingSenderId: "65092139484"
  };
  firebase.initializeApp(config);
}


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

                  <Route path="/guestbook" render={() =>           
                      <div>
                        <Guestbook />
                        <MessageList db={firebase} />
                        <MessageBox db={firebase} />
                      </div>
                    } />


            </body>

          </div>
        </Router>
    );
  }
}

export default App;
