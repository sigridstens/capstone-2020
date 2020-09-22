import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import EmShape from "../shared/em-shape/emShape";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";


function About() {
    return(
      <main>
        <section className=" content-section col-container pullquote">
          <p>The Museum of Lost Experiences (theMoLE) is a collection of crowd-sourced creative submissions on the subject of loss.
          </p>
        </section>

        <section className="content-section col-container pullquote">
          <p>All are welcome submit their own experience, and theMoLE encourages participants to use creativity as a way to process their feelings about difficult subjects, while using the collection website to connect intimately with the experiences of others.
          </p>
        </section>

        <section className="content-section col-container pullquote">
          <p>The Museum of Lost Experiences (theMoLE) is a collection of crowd-sourced creative submissions on
          </p>
        </section>

        <section className="content-section col-container pullquote">
          <p>The Museum of Lost Experiences (theMoLE) is a collection of crowd-sourced creative submissions on
          </p>
        </section>

        <CallToParticipate/>
      </main>
    )
}

export default About;