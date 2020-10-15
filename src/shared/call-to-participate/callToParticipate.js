import React from 'react';
import './callToParticipate.css';
// Remove all unused import statements. Circle is not used in this file.
import Circle from "../circle/circle";
import {Link, withRouter} from 'react-router-dom';

function CallToParticipate() {
  return (
    <section className="content-section call-to-participate">
      <div className="rectangle-shape shape"/>

      <div className="col-text">
        <h4>Want to share your lost experience?</h4>
        {/* use multiple lines when one line gets to about 120 characters. It will make your code more readable. */}
        <p>We each approach creativity in our own way. TheMoLE encourages people to use creativity to help process their feelings about missed opportunities—even if they don’t identify as an “artist.”</p>
        {/* This Link component could all be on one line. */}
        <Link to="/participate" className="button">learn more
        </Link>
      </div>

      <div className="blue-circle-shape shape">
      </div>
    </section>
  )
}

export default CallToParticipate;