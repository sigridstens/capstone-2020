import React from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
import {Link, useParams, withRouter} from 'react-router-dom';
import {submissions} from "../../full-collection/full-collection";

function ExhibitPreview() {

  return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape"></div>
      <h3>Current Exhibit</h3>
      <h4>Lost Quarantine Experiences</h4>

      <section className="hang-off-screen">

        <Circle backgroundImage={submissions[0].image}/>
        <Circle backgroundImage={submissions[1].image}/>
        <Circle backgroundImage={submissions[2].image}/>

      </section>

      <Link to="/collection" className="button exhibit-link">view exhibit</Link>
    </section>
  )
}

export default ExhibitPreview;