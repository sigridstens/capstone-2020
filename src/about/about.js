import React from 'react';
import './about.css';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import EmShape from "../shared/em-shape/emShape";


function About() {
    return(
      <main className="about">
          <section className=" content-section col-container pullquote">
            <div className="col-text">
              <p>The Museum of Lost Experiences (theMoLE) is a collection of crowd-sourced creative submissions on the subject of loss.
              </p>
            </div>

            <EmShape className="em-shape shape"/>
          </section>

        <section className=" content-section col-container pullquote">

          <div className="red-rectangle shape"/>

          <div className="col-text">
            <p>All are welcome submit their own experience, and theMoLE encourages participants to use creativity as a way to process their feelings about difficult subjects, while using the collection website to connect intimately with the experiences of others.
            </p>

            <div className="brown-rectangle shape"/>
          </div>
        </section>

        <section className=" content-section col-container pullquote">
          <div className="yellow-triangle-shape"/>
          <div className="col-text">
            <p>We all have experienced loss at some point in our lives. Exploring other people’s stories helps remind us we aren’t alone, even if each of our experiences of loss is unique.</p>
          </div>
        </section>

        <CallToParticipate/>
      </main>
    )
}

export default About;