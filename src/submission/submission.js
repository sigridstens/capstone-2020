import React from 'react';
import './submission.css';
import {useParams, Link} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import {submissions} from "../full-collection/full-collection";

function Submission() {
  let { id } = useParams();
  // find id in submissions
  const submission = submissions.find(function (submission) {
    return submission.linkpath === `/submission/${id}`
  });

  return (
    <main className= "submission">
      <section>
        <p className="breadcrumbs">
          <Link to="/current-exhibits">Exhibits</Link>
          <span> > </span>
          <Link to={`/exhibit/${submission.exhibitName}`}>{submission.exhibitName}</Link>
          <span> > {submission.title}</span>
        </p>

        <div className="content-section col-container">
          <figure className="col-half">
            <img src={submission.image} alt={submission.title}/>
          </figure>
          <section className="col-half">
            <h4>{submission.title}</h4>
            <h5><strong>Artist:</strong> Name</h5>
            <h5><strong>Medium:</strong> {submission.medium}</h5>
            <p>{submission.description}</p>
          </section>
        </div>
      </section>

      <CallToParticipate/>
    </main>
  )
}

export default Submission;