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
      title: "Submission 1",
      linkURL: "/submission"
    },
    {
      image: "/crowd-submission.jpg",
      title: "Submission 2",
      linkURL: "/submission"
    },
    {
      image: "fashion-submission.jpg",
      title: "Submission 3",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 4",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 5",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 6",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 7",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 8",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 9",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 10",
      linkURL: "/submission"
    },
    {
      image: "/collage-submission.jpg",
      title: "Submission 11",
      linkURL: "/submission"
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
                <Circle key={index} backgroundImage={submission.image} title={submission.title} linkurl = {submission.linkURL}/>
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