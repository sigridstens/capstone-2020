import React from 'react';
import './exhibit-gallery.css';
import Circle from "../shared/circle/circle";
import {useParams} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import { exhibits } from '../exhibits-overview/exhibits-overview.js';
import SubmissionFiltering from "../shared/submission-filtering/submission-filtering";

function ExhibitGallery() {
  let { exhibitName } = useParams();
  // find exhibit title in submissions
  const exhibit = exhibits[exhibitName];

  return (
    <main>
        <section className= "current-exhibit">
          <div className="yellow-triangle-shape shape"/>
          <div className="content-section">
            <h3>Current Exhibit</h3>
            <h4>{exhibitName}</h4>

            <SubmissionFiltering/>
          </div>

          <section className="submission-gallery">
            {
              exhibit.map((submission, index) => {
                return (
                  <Circle key={index} backgroundImage={submission.image} linkurl={submission.linkpath} title={submission.title}/>
                )
              })
            }
          </section>
        </section>

      <CallToParticipate/>
    </main>
  )
}

export default ExhibitGallery;