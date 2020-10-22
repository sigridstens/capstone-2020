import React from 'react';
import './callToParticipate.css';
import {Link} from 'react-router-dom';

function CallToParticipate() {
  return (
    <main className="content-section call-to-participate">
      <div className="rectangle-shape shape"/>

      <div className="col-text">
        <h4>Want to share your lost experience?</h4>
        <p>We each approach creativity in our own way. TheMoLE encourages people to use creativity to help process their feelings about missed opportunities—even if they don’t identify as an “artist.”</p>
        <Link to="/participate" className="button">learn more
        </Link>
      </div>

      <div className="blue-circle-shape shape">
      </div>
    </main>
  )
}

export default CallToParticipate;