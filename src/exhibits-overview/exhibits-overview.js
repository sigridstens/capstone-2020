import React from 'react';
import './exhibits-overview.css';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import {submissions} from "../full-collection/full-collection";


export const exhibits = {};
export const exhibitNames = [];
submissions.forEach(submission => {
  if (!exhibits[submission.exhibitName]) {
    exhibits[submission.exhibitName] = [submission];
    exhibitNames.push(submission.exhibitName);
  } else {
    exhibits[submission.exhibitName].push(submission)
  }
});

function ExhibitsOverview() {
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