import React from 'react';
import RSVP from './RSVP';

const RSVPList = ({yes, no}) => 
 <div className="rsvp-list">
	  <div>
	  	<h2>Coming</h2>
	    {yes.map((yes) => 
	      <div className="card">
	        <div className="card-content">
	        	<RSVP name={yes.name} selectedOption={yes.selectedOption} number={yes.number} />
	        </div>
	      </div>
	    )}
	  </div>

	    <div>
	    <h2>Not Coming</h2>
	    {no.map((no) => 
	      <div className="card">
	        <div className="card-content">
	        	<RSVP name={no.name} selectedOption={no.selectedOption} number={no.number} />
	        </div>
	      </div>
	    )}
	  </div>
  </div>

export default RSVPList