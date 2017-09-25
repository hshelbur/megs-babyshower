import React, { Component } from 'react';

class Home extends Component {
	render() {
		return(
			<div className="home vertical-align">
				<h1>Megan & Donald</h1>
				<h2>are expecting a baby!</h2>
				<a className="button" href="/rsvp">RSVP</a>
			</div>
		);
	}
}

export default Home