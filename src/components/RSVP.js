import React from 'react';

const RSVP = props => (
			<div className="rsvp">
				<p className="post-owner">{props.name}</p>
				<p className="post-rsvp">{props.selectedOption}</p>
				<p className="post-body">{props.number}</p>
			</div>
)
export default RSVP