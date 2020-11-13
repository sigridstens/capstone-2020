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

  //Setting up submission carousel
  let slideIndex = 1;

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides);
    if (slides.length) {
      slides[slideIndex-1].style.display = "block";
      console.log(dots);
      dots[slideIndex-1].className += " active";
    }
  }

  useEffect(() => {
    submissionData.find(submission => {
      if (submission.linkpath === `/submission/${id}`) {
        setSubmission(submission);

        return true;
      }
    });
  }, [submissionData, id]);

  useEffect(() => {
      //Creating submission carousel
      if (submission) {
        showSlides(slideIndex)
      };
  }, [submission]);

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

            <div className="submission-description-container">
              <h5><strong>Submission Description:</strong></h5>
              <p>{submission.description}</p>
            </div>
          </section>

          <div className="col col-twothirds carousel-container">
              {/*Photo Submission*/}
            <div className="mySlides fade">
              {submission.imageName ?
              <img src={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} className="submission-image" alt={submission.title}/>
              : <></>}
            </div>

            <div className="mySlides fade">
              {submission.submissionText ?
              <div className="submission-text">
                <p>{submission.submissionText}</p>
              </div>
              : <></>}
            </div>

            <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
            <a className="next" onClick="plusSlides(1)">&#10095;</a>
          </div>

          <div style="text-align:center">
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </section>

      <CallToParticipate/>
    </main>
  )
}

export default Submission;