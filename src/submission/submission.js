import React, {useEffect, useState} from 'react';
import './submission.css';
import {useParams, Link} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import axios from "axios";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
              <Link to={`/exhibit/${submission.exhibitName}`}>{submission.exhibitName}</Link>
            </>
            :
            <Link to="/full-collection">Full Collection</Link>
          }
          <span> > {submission.title}</span>
        </p>

        <div className="content-section col-container">
          <section className="col-text submission-info-section">
            <div className="">
              <h4>{submission.title}</h4>
              {/*Optional Artist Name*/}
              <h5><strong>Artist: </strong>
                {submission.artistName ? submission.artistName : <>Anonymous</>}
              </h5>

              {/*Optional Artist City, State*/}
              {(submission.artistCity || submission.artistState) ? <h5><strong>From: </strong>
                {submission.artistCity ? submission.artistCity : <></>}, {submission.artistState ? submission.artistState : <></>}
              </h5> : <></>}

              <h5><strong>Medium:</strong> {submission.medium}</h5>
              <h5><strong>Artist Age:</strong> {submission.artistAge}</h5>

              {submission.submissionLink ?
                <div>
                  <h5 className="submission-link"><strong>Link: </strong><a href={submission.submissionLink}>External submission</a>
                  </h5>
                </div>
                : <></>}
            </div>
          </section>

          {(submission.imageName && submission.submissionText) ?
            <AwesomeSlider className="col col-twothirds awssld">
                <div>
                  {/*Photo Submission*/}
                  <img src={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} className="submission-image" alt={submission.title}/>
                </div>

                <div>
                  {/*Text Submission*/}
                  <div className="submission-text">
                    <p>{submission.submissionText}</p>
                  </div>
                </div>
            </AwesomeSlider>
        :
          <>
            {submission.imageName ?
              <div className="col col-twothirds">
                {/*Photo Submission*/}
                <img src={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} className="submission-image" alt={submission.title}/>
              </div>
            : <></>}

            {submission.submissionText ?
              <div className="col col-twothirds">
                {/*Text Submission*/}
                <div className="submission-text">
                  <p>{submission.submissionText}</p>
                </div>
              </div>
            : <></>}
          </>
        }
        </div>

        <div className="content-section submission-description-container">
          <h5><strong>Submission Description:</strong></h5>
          <p>{submission.description}</p>
        </div>
      </section>

      <CallToParticipate/>
    </main>
  )
}

export default Submission;