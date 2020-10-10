import React from 'react';
import './submission.css';
import Circle from "../shared/circle/circle";
import {Link, withRouter} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import EmShape from "../shared/em-shape/emShape";

function Submission() {
  const data = [

    {
      image: "/crowd-submission.jpg",
      title: "Lost in the Crowd",
      medium: "collage mixed media",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est, eu interdum justo ipsum at mi. "
    }
  ];

  return (
    <main className= "submission">
        <section>
          {
            data.map((submission, index) => {
              return (
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
            )})
          }
        </section>

      <CallToParticipate/>
    </main>
  )
}

export default Submission;