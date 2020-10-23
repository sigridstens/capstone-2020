import React from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
import { Link } from 'react-router-dom';

function ExhibitPreview(props) {
  let exhibit = props.exhibit;

  return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape"/>
      <h3>Current Exhibit</h3>
      <h4>{exhibit[0].exhibitName}</h4>

      <section className="hang-off-screen">
        <Circle backgroundImage={exhibit[0].image}/>
        <Circle backgroundImage={exhibit[1].image}/>
        <Circle backgroundImage={exhibit[2].image}/>
      </section>

      <Link to={`/exhibit/${exhibit[0].exhibitName}`} className="button exhibit-link">view exhibit</Link>
    </section>
  )
}

export default ExhibitPreview;