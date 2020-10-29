import React, {useEffect, useState} from 'react';
import './participate.css';
import EmShape from "../shared/em-shape/emShape";
import {Link} from 'react-router-dom';
import axios from "axios";

function Participate() {
  const [state, setState] = useState({
    fileData: null,
    name: undefined,
    sanitizedName: undefined
  });
  const [loading, setLoading] = useState(false);
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
        setState({fileData: data, name: newName})
      });
  };

  // On file upload (click the upload button)
  const onFileUpload = async () => {
    const nameParts = state.name.split('.');
    let fileType = 'jpeg';
    const sanitizedName = nameParts[0].replace(/[^a-zA-Z0-9]/g, '');

    const response = await axios.get(`https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/files?fileName=${sanitizedName}&fileType=${nameParts[1]}`);
    const binary = atob(state.fileData.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    const arr = [];
    for (let i = 0; i < binary.length; i++) {
      arr.push(binary.charCodeAt(i));
    }
    if (nameParts[1] === 'png') {
      fileType = 'png';
    }
    const blobData = new Blob([new Uint8Array(arr)], {type: `image/${fileType}`});
    setLoading(true);
    const imageName = sanitizedName + '.' + nameParts[1];
    await axios.post('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/files',
      {
        "title": 'sigspot',
        "material": "cheese",
        "imageName": imageName,
        "description": "What a nice day for a ride to the park. It was snowing. ",
        "name": "Kevin",
        "age": "under 20"
      });
    await axios.put(response.data.uploadURL, blobData).then(() => {
      setState({...state, sanitizedName: imageName});
    }).finally(() => {
      setLoading(false);
    });
  };

  const fileData = () => {
    if (state.sanitizedName && !loading) {
      return (
        <div>
          <h2>Image Uploaded</h2>
          <img src={`https://testsubmissions.s3.amazonaws.com/${state.sanitizedName}`}
               style={{height: '140px', width: '140px'}}/>
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

  const openConfirmationModal = () => {
    document.getElementsByClassName("modalOverlay")[0].classList.toggle("openModal");
    document.getElementsByClassName("confirmationModal")[0].classList.toggle("openModal");
    onFileUpload();
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
            <h6>Submission</h6>

            <div className="form-row">
              <label htmlFor="title">Submission Title:</label>
              <input type="text" id="title" name="title" placeholder="What is the title of your experience?"/>
            </div>

            <h5>Add one or more types of media (image, link, text) as your submission:</h5>
            <div className="form-row file-upload-section">
              <label htmlFor="submission-file">Image Submission:</label>
              <input type="file" onChange={onFileChange} className="file-input"/>
            </div>

            <div className="form-row">
              <label htmlFor="submission-text">Written Submission:</label>
              <textarea type="text" id="submission-text" name="submission-text"/>
            </div>

            <div className="form-row">
              <label htmlFor="submission-link">Link to Submission (must also include a thumbnail image above):</label>
              <input type="text" id="submission-link" name="submission-link"/>
            </div>

            <h6>Submission Medium & Description</h6>

            <div className="form-row">
              <label htmlFor="medium">Materials or technologies used:</label>
              <select id="medium" name="medium">
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
                <option value="other">other</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="description">Brief Submission Description:</label>
              <textarea type="text" id="description" name="description"/>
            </div>

            <h6>Artist Background</h6>

            <div className="form-row">
              <label htmlFor="name">Your name (optional):</label>
              <input type="text" id="name" name="name" placeholder="What's your name?"/>
            </div>

            <div className="form-row">
              <label htmlFor="city">Your city (optional):</label>
              <input type="text" id="city" name="city" placeholder="Where do you live?"/>
            </div>

            <div className="form-row">
              <div className="tooltip-container">
                <label htmlFor="age">Your Age:</label>
                <p className="tooltip-text">This info will be used so viewers can sort submissions by the creator's
                  age.</p>
              </div>

              <select id="age" name="age">
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

            <input type="button" value="submit" className="form-row button" onClick={openConfirmationModal}/>
          </form>

          <aside className="confirmationModal">
            <div className="relative">
              <i className="fas fa-times close-icon" onClick={openConfirmationModal}/>
              <h3>Submission received!</h3>
              <h4>Thanks for adding your lost experience to the museum!</h4>
              <p><Link to="#" className="new-submission-link">You can find your submission here.</Link></p>
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