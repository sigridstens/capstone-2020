import React from 'react';
import './exhibit-gallery.css';
import Circle from "../shared/circle/circle";
import {Link, useParams} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import { exhibits } from '../exhibits-overview/exhibits-overview.js';

function ExhibitGallery() {
  let { exhibitName } = useParams();
  // find exhibit title in submissions
  const exhibit = exhibits[exhibitName];

  return (
    <main>
        <section className= "current-exhibit">
          <div className="yellow-triangle-shape shape"></div>
          <h3>Current Exhibit</h3>
          <h4>{exhibitName}</h4>

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
              exhibit.map((submission, index) => {
                return (
                  <Circle key={index} backgroundImage={submission.image} linkurl={submission.linkpath} title={submission.title}/>
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