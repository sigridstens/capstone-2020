import React from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
import {Link, withRouter} from 'react-router-dom';

function ExhibitPreview() {
  const data = [
    {
      image: "/collage-submission.jpg"
    },
    {
      image: "/crowd-submission.jpg"
    },
    {
      image: "fashion-submission.jpg"
    }
  ];

  return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape"></div>
      <h3>Current Exhibit</h3>
      <h4>Lost Quarantine Experiences</h4>

      <section className="hang-off-screen">
        {
          data.map((submission, index) => {
            return (
              <Circle key={index} backgroundImage={submission.image}/>
            )
          })
        }
      </section>

      <Link to="/collection" className="button exhibit-link">view exhibit</Link>
    </section>
  )
}

export default ExhibitPreview;