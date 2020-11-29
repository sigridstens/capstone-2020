import React, {useEffect, useState} from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
import { Link } from 'react-router-dom';
import axios from "axios";

function ExhibitPreview(props) {
  let exhibit = props.exhibit;
  const s3link = "https://testsubmissions.s3.us-east-2.amazonaws.com/";

  const [submissionData, setSubmissionData] = useState([{},{},{}]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
  }, []);

    return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape animation"/>
      {/*<h3>Current Exhibit</h3>
      <h4>{submissionData[0].linkpath ? submissionData[0].exhibitName : ""}</h4>*/}
      <h3>Available Now</h3>
      <h4>Full Collection</h4>

      <section className="hang-off-screen">
        <Circle backgroundImage={submissionData[0].linkpath ? s3link + submissionData[0].imageName : ""} />
        <Circle backgroundImage={submissionData[1].linkpath ? s3link + submissionData[1].imageName : ""}/>
        <Circle backgroundImage={submissionData[2].linkpath ? s3link + submissionData[2].imageName : ""}/>
      </section>

      {/* // For when there is an exhibit
      <Link to={submissionData.linkpath ? `/exhibit/${exhibit[0].exhibitName}` : ""} className="button exhibit-link">view exhibit</Link>*/}
      <Link to="/full-collection" className="button exhibit-link">view collection</Link>
    </section>
  )
}

export default ExhibitPreview;