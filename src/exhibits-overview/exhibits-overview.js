import React, {useEffect, useState} from 'react';
import './exhibits-overview.css';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import axios from "axios";

export const exhibits = {};
export const exhibitNames = [];

function ExhibitsOverview() {
  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);

      submissionData.forEach(submission => {
        if (!exhibits[submissionData.exhibitName]) {
          exhibits[submissionData.exhibitName] = [submission];
          exhibitNames.push(submission.exhibitName);
        } else {
          exhibits[submission.exhibitName].push(submission)
        }
      });
    }
    fetchData();
  }, []);

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