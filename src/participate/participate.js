import React, {useEffect, useState} from 'react';
import './participate.css';
import EmShape from "../shared/em-shape/emShape";
import {Link} from 'react-router-dom';
import {onFileUpload} from "./utility";
import axios from "axios";

function Participate() {
  const [loading, setLoading] = useState(false);

  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
  }, [submissionData]);

  const [formData, setFormData] = useState({
    title: "",
    image: undefined,
    submissionText: "",
    submissionLink: "",
    medium: "",
    description: "",
    artistName: "",
    artistCity: "",
    artistState: "",
    artistAge: "",
    exhibitName: "Lost Quarantine Experiences",
    exhibitLink: "/exhibit/lost-quarantine-experiences"
  });

  const [submissionLinkPath, setSubmissionLinkPath] = useState("");


  const disableSubmit = () => {
    if (!formData.title || !formData.medium || !formData.description || !formData.artistAge) {
      return true;
    }

    if (!formData.image && !formData.submissionText && (!formData.submissionLink || !formData.image)) {
      return true
    }
  }

  const handleChange = (fieldName, event) => {
    const tempData = {...formData};
    tempData[fieldName] = event.target.value;
    setFormData(tempData);
  }

  useEffect(() => {
    if (window.location.href.indexOf('#submission-form') > -1) {
      document.getElementById("submission-form").scrollIntoView();
    }
  }, [])

  // On file select (from the pop up)
  const onFileChange = event => {
    const newName = event.target.files[0].name;
    const fileDataURL = file => new Promise((resolve, reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(file)
    });
    fileDataURL(event.target.files[0])
      .then(data => {
        setFormData({...formData, image: {fileData: data, name: newName}});
      });
  };

  const displayImgLoading = () => {
    if (!loading) {
      return (
        <div>
          <h2>Image Uploaded</h2>
        </div>
      );
    } else if (loading) {
      return (
        <div>
          <br/>
          <h4>loading</h4>
        </div>
      );
    } else {
      return (<></>);
    }
  };

  //After submit button is pushed open confirmation modal
  const openConfirmationModal = async () => {
    document.getElementsByClassName("modalOverlay")[0].classList.toggle("openModal");
    document.getElementsByClassName("confirmationModal")[0].classList.toggle("openModal");
    setLoading(true);
    await onFileUpload(formData).then(response => {
      setSubmissionLinkPath(response.linkpath);
    }).finally(() => {
      setLoading(false);
    });
  };


  return (
    <main className="participate">
      <section className=" content-section col-container participation-details">
        <EmShape className="em-shape shape"/>
        <div className="rectangle shape"/>

        <div className="col-text">
          <h4>How to participate</h4>
          <p>Make a creative representation of a lost experience in your life, like a shift in your routine after some
            life change, lost opportunity, lost moment, etc.</p>

          <p>For examples, check out the <Link to="/full-collection">collection</Link>.</p>
        </div>
      </section>

      <section className=" content-section col-container center">
        <div className="col-text">
          <p>You can use text, a link to a project, and any medium you can photograph to express your lost experience. We hope to have video and audio submission capabilities available soon!</p>
        </div>
      </section>

      <section className="content-section col-container submission-form">
        <div className="col-text">
          <div className="yellow-triangle-shape shape"/>

          <p>When your lost experience is ready, add it to the collection here!</p>

          <form method="post">
            <h6>Submission Content</h6>

            <div className="form-row">
              <label htmlFor="title">Submission Title:</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={(event) => handleChange("title", event)} placeholder="What is the title of your experience?"/>
            </div>

            <h5>Add at least one type of media (image, written, link) as your submission:</h5>
            <div className="form-row file-upload-section">
              <label htmlFor="submission-file">Image Submission:</label>
              <input type="file" onChange={onFileChange} className="file-input"/>
            </div>

            <div className="form-row">
              <label htmlFor="submission-text">Written Submission:</label>
              <textarea type="text" id="submission-text" name="submission-text" value={formData.submissionText} onChange={(event) => handleChange("submissionText", event)}/>
            </div>

            <div className="form-row">
              <label htmlFor="submission-link">Link to Submission (must also include a thumbnail image above):</label>
              <input type="text" id="submission-link" name="submission-link" value={formData.submissionLink} onChange={(event) => handleChange("submissionLink", event)}/>
            </div>

            <h6>Medium & Description</h6>

            <div className="form-row">
              <label htmlFor="medium">Materials or technologies used:</label>
              <select id="medium" name="medium" value={formData.medium} onChange={(event) => handleChange("medium", event)}>
                <option value=""></option>
                <option value="collage">collage</option>
                <option value="digital">digital art</option>
                <option value="drawing">drawing</option>
                <option value="textile">fabric, yarn, thread, or textile</option>
                <option value="food">food</option>
                {/*<option value="music">music or sound</option>*/}
                <option value="painting">painting</option>
                <option value="photography">photography</option>
                <option value="sculpture">sculpture</option>
                <option value="technology">technology</option>
                <option value="technology">writing</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="description">Brief Submission Description:</label>
              <textarea type="text" id="description" name="description" value={formData.description} onChange={(event) => handleChange("description", event)}/>
            </div>

            <h6>Artist Background</h6>

            <div className="form-row">
              <label htmlFor="name">Your name (optional):</label>
              <input type="text" id="name" name="name" placeholder="What's your name?" value={formData.artistName} onChange={(event) => handleChange("artistName", event)}/>
            </div>

            <div className="form-row">
              <label htmlFor="city">Your city (optional):</label>
              <input type="text" id="city" name="city" placeholder="Where do you live?" value={formData.artistCity} onChange={(event) => handleChange("artistCity", event)}/>

              <label htmlFor="state">State (optional):</label>
              <select id="state" name="state" value={formData.artistState} onChange={(event) => handleChange("artistState", event)}>
                <option value=""></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>

            <div className="form-row">
              <div className="tooltip-container">
                <label htmlFor="age">Your Age:</label>
                <p className="tooltip-text">This info will be used so viewers can sort submissions by the creator's
                  age.</p>
              </div>

              <select id="age" name="age" value={formData.artistAge} onChange={(event) => handleChange("artistAge", event)}>
                <option value=""></option>
                <option value="under 20">under 20</option>
                <option value="21-30">21-30</option>
                <option value="31-40">31-40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
                <option value="over 80">over 80</option>
              </select>
            </div>

            <button type="button" className="form-row button" disabled={disableSubmit()} onClick={openConfirmationModal}>submit</button>
          </form>

          <aside className="confirmationModal">
            <div className="relative">
              <i className="fas fa-times close-icon" onClick={openConfirmationModal}/>
              <h3>Submission received!</h3>
              <h4>Thanks for adding your lost experience to the museum!</h4>
              <p><Link to={submissionLinkPath} className="new-submission-link">You can find your submission here.</Link></p>
              <p>If you have time, check out others' submissions in the <Link to="/full-collection">collection</Link> or
                connect with others by sharing your submission on social media by using the hashtag <em>#MyLostExperience</em>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Participate;