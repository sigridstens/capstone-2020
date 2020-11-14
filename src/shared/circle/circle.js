import React from 'react';
import './circle.css';


function Circle(props) {
  return (
    <div className="circle">
      <a href={props.linkurl}>
        <div className="overlay"></div>
        <img className="circle-img" src={process.env.PUBLIC_URL + props.backgroundImage} alt={props.alt}/>
        <p>{props.title}</p>
      </a>
    </div>
  )
}

export default Circle;