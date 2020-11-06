import React, {useEffect, useState} from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
import { Link } from 'react-router-dom';
import axios from "axios";

function ExhibitPreview(props) {
  let exhibit = props.exhibit;

  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
  }, []);


  return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape"/>
      <h3>Current Exhibit</h3>
      <h4>{submissionData.linkpath ? submissionData[0].exhibitName : ""}</h4>

      <section className="hang-off-screen">
        <Circle backgroundImage={submissionData.linkpath ? submissionData[0].image : ""}/>
        <Circle backgroundImage={submissionData.linkpath ? submissionData[1].image : ""}/>
        <Circle backgroundImage={submissionData.linkpath ? submissionData[2].image : ""}/>
      </section>

      {/*<Link to={submissionData.linkpath ? `/exhibit/${exhibit[0].exhibitName}` : ""} className="button exhibit-link">view exhibit</Link>*/}
      <Link to={submissionData.linkpath ? submissionData.linkpath : "#"} className="button exhibit-link">view exhibit</Link>
    </section>
  )
}

export default ExhibitPreview;