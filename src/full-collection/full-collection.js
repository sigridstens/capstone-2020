import React, {useEffect, useState} from 'react';
import './full-collection.css';
import Circle from "../shared/circle/circle";
import CallToParticipate from "../shared/call-to-participate/callToParticipate";
import SubmissionFiltering from "../shared/submission-filtering/submission-filtering";
import axios from "axios";

{/*export const submissions = [
  {
    image: "/collage-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Office Life",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/crowd-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission2",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/fashion-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Girls Nights In",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission3",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/family-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Summer Nights with Family",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission4",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/camping-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Spontaneous Bike Trips",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission5",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/travel-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Touring the Coast",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission6",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/painting-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Serenity",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission7",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/porch-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Porch Sitting with Friends",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission8",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/friendship-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "My Ladies",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission9",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/collage-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Office Banter",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission10",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/crowd-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission11",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/fashion-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Literally Everything",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission12",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/family-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission4",
    exhibitLink: "/exhibit/summer-vacation"


  },
  {
    image: "/camping-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission5",
    exhibitLink: "/exhibit/summer-vacation"


  },
  {
    image: "/travel-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission6",
    exhibitLink: "/exhibit/summer-vacation"
  },    {
    image: "/painting-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission7",
    exhibitLink: "/exhibit/summer-vacation"

  },
  {
    image: "/porch-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission8",
    exhibitLink: "/exhibit/summer-vacation"

  },
  {
    image: "/friendship-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission9",
    exhibitLink: "/exhibit/summer-vacation"

  },    {
    image: "/collage-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission10",
    exhibitLink: "/exhibit/summer-vacation"

  },
  {
    image: "/crowd-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission11",
    exhibitLink: "/exhibit/summer-vacation"

  },
  {
    image: "/fashion-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission12",
    exhibitLink: "/exhibit/summer-vacation"

  },
];*/}

function FullCollection() {
  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
      setSubmissionData(response.data.Items);
    }
    fetchData();
    }, []);

  return (
    <main>
      <section className= "full-collection">
        <div className="yellow-triangle-shape shape"/>
        <div className="content-section">
          <h3>Entire Collection</h3>
          <h4>Lost Experiences</h4>

          <SubmissionFiltering/>
        </div>

        <section className="submission-gallery">
          {
            submissionData.map((submission, index) => {
              return (
                <Circle key={index} backgroundImage={"https://testsubmissions.s3.us-east-2.amazonaws.com/" + submission.imageName} title={submission.title} linkurl = {submission.linkpath}/>
              )
            })
          }
        </section>
      </section>

      <CallToParticipate/>
    </main>
  )
}

export default FullCollection;