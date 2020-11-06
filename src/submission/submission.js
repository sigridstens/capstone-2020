import React, {useEffect, useState} from 'react';
import './submission.css';
import {useParams, Link} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import axios from "axios";

function Submission() {
  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
  }, []);

  let { id } = useParams();
  // find id in submissions
  const [submission, setSubmission] = useState({});

  useEffect(() => {
    submissionData.find(submission => {
      if (submission.linkpath === `/submission/${id}`) {
        setSubmission(submission);
        return true;
      }
    });
  }, [submissionData, id]);

  return (
    <main className= "submission">
      <section>
        <p className="breadcrumbs">
          {submission.exhibitName ?
            <>

              <span> > </span>
              <Link to={`/exhibit/${submission.exhibitName}`}>{submission.exhibitName}</Link>
            </>
            :
            <Link to="/full-collection">Full Collection</Link>
          }
          <span> > {submission.title}</span>
        </p>

        <div className="content-section col-container">
          <figure className="col-half">
            <img src={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} alt={submission.title}/>
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