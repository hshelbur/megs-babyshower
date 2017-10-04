import React from 'react';
import RSVP from './RSVP';

const RSVPList = ({rsvps}) => 
  <div>
    {rsvps.map((rsvp) => 
      <div className="card">
        <div className="card-content">
          <RSVP name={rsvp.name} selectedOption={rsvp.selectedOption} number={rsvp.number} />
        </div>
      </div>
    )}
  </div>

export default RSVPList