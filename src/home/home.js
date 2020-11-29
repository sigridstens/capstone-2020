import React, {useEffect, useState} from 'react';
import './home.css';
import ExhibitPreview from "../shared/exhibit-preview/exhibitPreview";
import {Link} from 'react-router-dom';
import EmShape from "../shared/em-shape/emShape";
import {exhibits,exhibitNames} from "../exhibits-overview/exhibits-overview";


function Home() {
  const wordCarousel = ['experiences.', 'opportunities.', 'dreams.'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => {
        return index === wordCarousel.length - 1 ? 0 : index + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function scrollDown(){
    const element = document.getElementsByClassName('description')[0];
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }


  return (
    <main className="home">
      <section className="hero content-section">
        <h2>Everyone has <span className="outlined">lost</span> <span className="hidden">experiences.</span>
          <span className="rotating">{wordCarousel[index]}</span>
        </h2>
        <i className="fas fa-angle-down scroll-button" onClick={scrollDown}/></section>

        <section className="content-section col-container description">
          <div className="col-text center-container">
            <p>The Museum of Lost Experiences is a collection of creative submissions representing those experiences.</p>

            <Link to="/participate" className="button center">participate</Link>

            <div className="animation">
              <EmShape className="em-shape shape"/>
              <div className="rectangle shape"/>
            </div>
          </div>
        </section>

      <ExhibitPreview exhibit={exhibits[exhibitNames[0]]}/>

        <section className="content-section col-container call-to-action">
          <div className="rectangle-shape shape"/>
          <div className="col-text">
            <h4>Do you have a lost experience to share?</h4>
            <p>Everyone has lost experiences.</p>
          </div>

          <p className="circle-text">Some of them are big and easy to notice.</p>
        </section>

        <section className=" content-section section-two col-container call-to-action">
          <div className="col-text">
            <img className="multiple-circle" src={process.env.PUBLIC_URL + "/multiple-shapes@2x.png"}/>
          </div>

          <div className="col-text col-two">
            <p>While some are so small or routine it is difficult to see how much their loss affects us.</p>
          </div>
        </section>

        <section className=" content-section col-container call-to-action">
          <div className="rectangle-shape shape"/>
          <div className="col-text">
            <p className="center">We each have a unique perspective of our experiences. There is no “one right way” to be creative and you don't have to be an "artist" to use creativity to help express and process your thoughts and feelings.</p>
            <p>
              <Link to="/participate" className="button">participate</Link>
            </p>
          </div>
        </section>
    </main>
  )
}

export default Home;