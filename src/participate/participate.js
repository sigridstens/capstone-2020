import React from 'react';
import './participate.css';
import EmShape from "../shared/em-shape/emShape";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";


function Participate() {
    return(
      <main className="participate">
        <section className=" content-section col-container pullquote">
          <div className="col-text">
            <h4>Want to add your own experience to the collection?</h4>
            <p>
              Everyone has lost experiences. Some of them are big and obvious, while some are so small or routine it's difficult to notice how much their loss affects us.
            </p>
          </div>
          <div className="col-text">
            <p>We each have a unique perspective of our own lost experiences. TheMoLE encourages people to use creativity to help process their feelings about missed opportunities—even if they don’t identify as an “artist.”</p>
          </div>
        </section>

        <CallToParticipate/>
      </main>
    )
}

export default Participate;