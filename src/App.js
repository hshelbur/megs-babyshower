import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './layout/navbar.js';
import Home from './pages/home.js';
import RSVP from './pages/rsvp.js';
import Registry from './pages/registry.js'
import MessageBox from './components/MessageBox'
import MessageList from './components/MessageList'
import RSVPBox from './components/RSVPBox'
import RSVPList from './components/RSVPList'


const App = ({posts, rsvps, createPost, createRSVP}) => 
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
                <div> 
                  <RSVPBox createRSVP={createRSVP} />
                  <RSVPList rsvps={rsvps} />
                </div>
              } />

            <Route path="/guestbook" render={() =>           
                <div>
                  <MessageBox createPost={createPost} />
                  <MessageList posts={posts} />
                </div>
              } />

      </body>

    </div>
  </Router>



export default App;
