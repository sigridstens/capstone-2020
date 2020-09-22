import React from 'react';
import './callToParticipate.css';
import Circle from "../circle/circle";
import {Link, withRouter} from 'react-router-dom';

function CallToParticipate() {
  return (
    <section>
      <h4>Want to share your lost experience</h4>
      <p>We each approach creativity in our own way. TheMoLE encourages people to use creativity to help process their feelings about missed opportunities—even if they don’t identify as an “artist.”</p>
      <Link to="/participate" className="button">participate
      </Link>
    </section>
  )
}

export default CallToParticipate;