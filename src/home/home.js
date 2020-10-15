import React, {useEffect, useState} from 'react';
import './home.css';
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import {Link} from 'react-router-dom';
import EmShape from "../shared/em-shape/emShape";
import {exhibits,exhibitNames} from "../exhibits-overview/exhibits-overview";


function Home() {
  const wordCarousel = ['experiences.', 'opportunities.', 'dreams.'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // A comment explaining what this function does would be helpful.
    const interval = setInterval(() => {
      setIndex(index => {
        return index === wordCarousel.length - 1 ? 0 : index + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <main className="home">
      <section className="hero content-section">
        <h2>Everyone has <span className="outlined">lost</span> <span className="hidden">experiences.</span>
          <span className="rotating">{wordCarousel[index]}</span>
        </h2>
        <i className="fas fa-angle-down scroll-button"></i></section>

        <section className="content-section col-container description">
          <div className="col-text center-container">
            <p>The Museum of Lost Experiences is a collection of creative submissions representing those experiences.</p>

            <Link to="/participate" className="button center">participate</Link>

            {/*Dont add empty attribbutes*/}
            <div className="">
              <EmShape className="em-shape shape"/>

              {/*Formatting is off here*/}
            <div className="rectangle shape"></div>
            </div>
          </div>
        </section>

      <ExhibitPreview exhibit={exhibits[exhibitNames[0]]}/>
      <CallToParticipate/>
    </main>
  )
}

export default Home;