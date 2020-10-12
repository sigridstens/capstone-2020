import React from 'react';
import './exhibits-overview.css';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import {submissions} from "../full-collection/full-collection";

function ExhibitsOverview() {

  const exhibits = {};
  const exhibitNames = [];
  submissions.forEach(submission => {
    // exhibits.'Summer Vacation'
    if (!exhibits[submission.exhibitName]) {
      exhibits[submission.exhibitName] = [submission];
      exhibitNames.push(submission.exhibitName);
    } else {
      exhibits[submission.exhibitName].push(submission)
    }
  });

  return (
    <main className="exhibits-overview">
      {exhibitNames.map(exhibit => {
        return (
          <ExhibitPreview exhibit={exhibits[exhibit]}/>
        )
      })}
      <CallToParticipate/>
    </main>
  )
}

export default ExhibitsOverview;