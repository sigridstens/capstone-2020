import React from 'react';
import './participate.css';
import EmShape from "../shared/em-shape/emShape";
import {Link} from 'react-router-dom';


function Participate() {
    return(
      <main className="participate">
        <section className=" content-section col-container pullquote">
          <div className="col-text">
            <h4>Do you have a lost experience to share?</h4>
            <p>Everyone has lost experiences.</p>
          </div>

          <div className="col-text relative">
            {/*<div className="blue-circle-shape shape"/>*/}
            <p className="circle-text">Some of them are big and easy to notice.</p>
          </div>
        </section>

        <section className=" content-section section-two col-container pullquote">
          <div className="col-text">
            <img className="multiple-circle" src={process.env.PUBLIC_URL + "/multiple-shapes@2x.png"}/>
          </div>

          <div className="col-text col-two">
            <p>While some are so small or routine it is difficult to see how much their loss affects us.</p>
          </div>
        </section>

        <section className=" content-section col-container pullquote center-container">
          <div className="rectangle-shape shape"/>
          <div className="col-text">
            <p className="center">We each have a unique perspective of our experiences. There is no “one right way” to be creative.</p>
          </div>
        </section>

        <section className=" content-section col-container pullquote">
          <div className="col-text">
            <div className="brown-rectangle"/>
              <p>TheMoLE encourages people to use creativity to help process their feelings about missed opportunities—even if they don’t identify as an “artist.”</p>
            </div>
        </section>

        <section className=" content-section col-container pullquote participation-details">
          <div className="col-text">
            <div className="red-rectangle"/>
            <div className="yellow-triangle-shape shape"/>
            <h4>How to participate</h4>
            <p>To participate, make a creative representation of a lost experience in your life,  like a shift in your routine after some life change, a lost job, lost opportunity, lost moment, or lost relationship.</p>

            <p>For more examples, check out the <Link to="/explore">collection</Link> to see what others have submitted.</p>
          </div>
        </section>

        <section className=" content-section col-container pullquote">
          <div className="col-text">
            <EmShape/>
            <p>When your lost experience is ready, take a photo or video of it and submit it here!</p>

            <form>
              <div className="form-row">
                <label htmlFor="title">Submission Title:</label>
                <input type="text" id="title" name="title" placeholder="What is is the title of your experience?" />
              </div>
              <div className="form-row">
                <label htmlFor="medium">Medium:</label>
                <input type="text" id="medium" name="medium" placeholder="What materials did you use to make it?" />
              </div>

              <div className="form-row">
                <label htmlFor="description">Optional Description:</label>
                <textarea type="text" id="description" name="description" cols="58" rows="10"/>
              </div>

              <input type="submit" value="submit" className="form-row button" />
            </form>
          </div>
        </section>

        {/*<section className=" content-section col-container pullquote align-right">
          <div className="col-text ">
            <p>Want more flexibility? You can use any medium that can be sent by mail to the Museum of Lost Experiences collection location:</p>

            <em>3275 Memory Lane<br></br>
            Minneapolis, MN 55406</em>
          </div>
        </section>*/}
      </main>
    )
}

export default Participate;