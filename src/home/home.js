import React, {useEffect, useState} from 'react';
import './home.css';
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";


function Home() {
  const wordCarousel = ['experiences', 'opportunities', 'dreams'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => {
        return index === wordCarousel.length - 1 ? 0 : index + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="hero content-section">
        <h2>Everyone has <span className="outlined">lost</span> <span className="hidden">experiences.</span>
          <span className="rotating">{wordCarousel[index]}</span>
        </h2>
        <i className="fas fa-angle-down"></i></section>

      <section className="content-section">
        The Museum of Lost Experiences is a collection of creative submissions representing those experiences.

      </section>

      <ExhibitPreview/>
      <CallToParticipate/>
    </main>
  )
}

export default Home;