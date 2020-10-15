import React from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";
// For imports choose single quotes or double and stick to your pattern throughout the project
import { Link } from 'react-router-dom';

function ExhibitPreview(props) {
  let exhibit = props.exhibit;

  // Is this console.log here for debugging? If so, remove it
  console.log(exhibit);

  return (
    <section className="content-section exhibit-preview">
      <div className="yellow-triangle-shape shape"></div>
      <h3>Current Exhibit</h3>
      <h4>{exhibit[0].exhibitName}</h4>

      <section className="hang-off-screen">
        {/* hard coding and counting on 3 exhibits being here can be risky. An if check before returning this html could be good. */}
        <Circle backgroundImage={exhibit[0].image}/>
        <Circle backgroundImage={exhibit[1].image}/>
        <Circle backgroundImage={exhibit[2].image}/>

      </section>

      <Link to={`/exhibit/${exhibit[0].exhibitName}`} className="button exhibit-link">view exhibit</Link>
    </section>
  )
}

export default ExhibitPreview;