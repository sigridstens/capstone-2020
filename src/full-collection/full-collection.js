import React, {useEffect, useState} from 'react';
import './full-collection.css';
import Circle from "../shared/circle/circle";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import SubmissionFiltering from "../shared/submission-filtering/submission-filtering";
import axios from "axios";

function FullCollection() {
  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
    }, []);

  return (
    <main>
      <section className= "full-collection">
        <div className="yellow-triangle-shape shape"/>
        <div className="content-section">
          <h3>Entire Collection</h3>
          <h4>Lost Experiences</h4>

          <SubmissionFiltering/>
        </div>

        <section className="submission-gallery">
          {
            submissionData.map((submission, index) => {
              return (
                <Circle key={index} backgroundImage={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} title={submission.title} linkurl = {submission.linkpath}/>
              )
            })
          }
        </section>
      </section>

      <CallToParticipate/>
    </main>
  )
}

export default FullCollection;