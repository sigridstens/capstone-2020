import React from 'react';
import './exhibit-gallery.css';
import Circle from "../shared/circle/circle";
import {Link, withRouter, useParams} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import {submissions} from '../full-collection/full-collection.js';
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";

function ExhibitGallery() {
  let { id } = useParams();
  // find id in projects
  const submission = submissions.find(function (submission) {
    return submission.linkpath === `/exhibit/${id}`
  });

  return (
    <main>
        <section className= "current-exhibit">
          <div className="yellow-triangle-shape shape"></div>
          <h3>Current Exhibit</h3>
          <h4>Lost Quarantine Experiences</h4>

          <nav className="filtering">
            <h5>filter exhibit</h5>
            <i className="fas fa-search search-icon"></i>
            <ul>
              <li>medium</li>
              <li>submitter age</li>
              <li>tags</li>
              <li>sort by</li>
            </ul>
          </nav>

          <section className="gallery">
            {
              submissions.map((submission, index) => {
                return (
                  <Circle key={index} backgroundImage={submission.image} linkurl={submission.linkURL} title={submission.title}/>
                )
              })
            }
          </section>

          <Link to="/collection" className="button exhibit-link">view exhibit</Link>

        </section>

      <CallToParticipate/>
    </main>
  )
}

export default ExhibitGallery;