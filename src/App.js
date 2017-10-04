import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './layout/navbar.js';
import Home from './pages/home.js';
import Registry from './pages/registry.js'
import MessageBox from './components/MessageBox'
import MessageList from './components/MessageList'
import RSVPBox from './components/RSVPBox'
import RSVPList from './components/RSVPList'


const App = ({posts, rsvps, createPost, createRSVP}) => 
  <Router>
    <div>
      <div className="container">
        <img src="/images/background.jpg" className="background" />
      </div>

      <div>
        <Nav />
        <body>

              <Route exact path="/" render={() =>           
                  <Home />
                } />

              <Route path="/rsvp" render={() =>           
                  <RSVPBox createRSVP={createRSVP} />
                } />

              <Route path="/registry" render={() =>
                  <Registry />
                } />

              <Route path="/rsvplist" render={() =>
                  <RSVPList yes={rsvps.filter((rsvp) => rsvp.selectedOption === 'yes')} no={rsvps.filter((rsvp) => rsvp.selectedOption === 'no')} />
                } />

              <Route path="/guestbook" render={() =>           
                  <div>
                    <MessageBox createPost={createPost} />
                    <MessageList posts={posts} />
                  </div>
                } />

        </body>

        <footer>
          <p className="developed-by">Designed and Developed by <a href="https://www.linkedin.com/in/howard-shelburne/" target="_blank" rel="noopener noreferrer">Howard Shelburne</a>, Web Developer</p>
        </footer>

      </div>
    </div>
  </Router>



export default App;
