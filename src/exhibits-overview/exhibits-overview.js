import React from 'react';
import './exhibits-overview.css';
import Circle from "../shared/circle/circle";
import {Link, withRouter} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";

function ExhibitsOverview() {

  return (
    <main className="exhibits-overview">
      <ExhibitPreview/>
      <ExhibitPreview/>
      <CallToParticipate/>
    </main>
  )
}

export default ExhibitsOverview;