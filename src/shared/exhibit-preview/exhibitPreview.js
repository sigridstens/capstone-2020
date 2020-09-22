import React from 'react';
import './exhibitPreview.css';
import Circle from "../circle/circle";


function ExhibitPreview() {
  const data = [
    {
      image: "/MoLE-logo-horizontal.png"
    },
    {
      image: ""
    },
    {
      image: ""
    }
  ];

  return (
    <section>
      <h3>Current Exhibit</h3>
      <h4>Lost Quarantine Experiences</h4>

      <section>
        {
          data.map((submission, index) => {
            return (
              <Circle key={index} backgroundImage={submission.image}/>
            )
          })
        }
      </section>
    </section>
  )
}

export default ExhibitPreview;