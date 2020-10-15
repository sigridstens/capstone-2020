import React from 'react';
import './explore.css';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import EmShape from "../shared/em-shape/emShape";
import Circle from "../shared/circle/circle";
import {Link} from "react-router-dom";
import {exhibitNames, exhibits} from "../exhibits-overview/exhibits-overview";


function Explore() {
    const data = [
      {
        image: "/bulletin-submission.jpg"
      },
      {
        image: "/camping-submission.jpg"
      },
      {
        image: "/family-submission.jpg"
      },
      {
        image: "/friendship-submission.jpg"
      },

      {
        image: "/porch-submission.jpg"
      },
      {
        image: "/travel-submission.jpg"
      }
    ];

    return(
        <main className="explore">
          <ExhibitPreview exhibit={exhibits[exhibitNames[0]]}/>

          <section className="content-section collection-preview">
            <div className="brown-rectangle"/>
            <div className="red-rectangle"/>

            <h4>Entire Collection</h4>
            <section className="gallery-preview">
              {
                data.map((submission, index) => {
                  return (
                    <Circle key={index} backgroundImage={submission.image}/>
                  )
                })
              }
            </section>

            <Link to="/full-collection" className="button">browse experiences</Link>

            <EmShape/>
          </section>

          <CallToParticipate/>
        </main>
    )
}

export default Explore;