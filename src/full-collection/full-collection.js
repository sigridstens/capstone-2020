import React from 'react';
import './full-collection.css';
import Circle from "../shared/circle/circle";
import {Link, withRouter} from 'react-router-dom';
import EmShape from "../shared/em-shape/emShape";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";

function FullCollection() {
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
      <section className= "full-collection">
        <div className="yellow-triangle-shape shape"></div>
        <h3>Entire Collection</h3>
        <h4>Lost Experiences</h4>

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
                <Circle key={index} backgroundImage={submission.image}/>
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

export default FullCollection;