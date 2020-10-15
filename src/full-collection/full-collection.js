import React from 'react';
import './full-collection.css';
import Circle from "../shared/circle/circle";
import {Link} from 'react-router-dom';
import CallToParticipate from "../shared/call-to-participate/callToParticipate";

// This massive data piece could be in a separate JSON file and imported to make this component/file easier to read.
export const submissions = [
  {
    image: "/collage-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
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
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission3",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/family-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission4",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/camping-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission5",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/travel-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission6",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/painting-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission7",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/porch-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission8",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/friendship-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission9",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },    {
    image: "/collage-submission.jpg",
    exhibitName: "Lost Quarantine Experiences",
    keywords: "",
    title: "Lost in the Crowd",
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
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission12",
    exhibitLink: "/exhibit/lost-quarantine-experiences"

  },
  {
    image: "/collage-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission",
    exhibitLink: "/exhibit/summer-vacation"



  },
  {
    image: "/crowd-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission2",
    exhibitLink: "/exhibit/summer-vacation"


  },
  {
    image: "/fashion-submission.jpg",
    exhibitName: "Summer Vacation",
    keywords: "",
    title: "Lost in the Crowd",
    medium: "collage mixed media",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex ipsum, tempor ac pulvinar id, aliquam nec eros. Sed vitae suscipit odio. Aliquam eget tempor neque, sed semper velit. Praesent nisi mi, tristique nec euismod quis, varius ac dolor. Donec pretium ex id pretium hendrerit. Phasellus pulvinar dictum efficitur. Aenean sodales, metus quis ornare vulputate, felis ex commodo est.",
    linkpath: "/submission/submission3",
    exhibitLink: "/exhibit/summer-vacation"


  },    {
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
];

function FullCollection() {
  return (
    <main>
      <section className= "full-collection">
        <div className="yellow-triangle-shape shape"></div>
        <h3>Entire Collection</h3>
        <h4>Lost Experiences</h4>

        <nav className="filtering">
          <h5>filter exhibit</h5>
          <i className="fas fa-search search-icon"></i>
          <ul>
            <li>medium</li>
            <li>submitter age</li>
            <li>tags</li>
            <li>sort by</li>
          </ul>
        </nav>

        <section className="gallery">
          {
            submissions.map((submission, index) => {
              return (
                <Circle key={index} backgroundImage={submission.image} title={submission.title} linkurl = {submission.linkpath}/>
              )
            })
          }
        </section>

        <Link to="/collection" className="button exhibit-link">view exhibit</Link>

      </section>

      <CallToParticipate/>
    </main>
  )
}

export default FullCollection;