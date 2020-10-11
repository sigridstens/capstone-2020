import React from 'react';
import './current-exhibit.css';
import Circle from "../shared/circle/circle";
import {Link, withRouter} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import EmShape from "../shared/em-shape/emShape";

function CurrentExhibit() {
  const data = [
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/crowd-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "fashion-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 1"
    }
  ];

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
              data.map((submission, index) => {
                return (
                  <Circle key={index} backgroundImage={submission.image} linkurl={submission.linkURL} title={submission.title}/>
                )
              })
            }
          </section>

          <Link to="/collection" className="button exhibit-link">view exhibit</Link>
          <EmShape/>

        </section>

      <CallToParticipate/>
    </main>
  )
}

export default CurrentExhibit;