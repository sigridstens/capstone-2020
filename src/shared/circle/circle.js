import React from 'react';
import './circle.css';


function Circle(props) {
  console.log(props);
  return (
    <img className="circle" src={process.env.PUBLIC_URL + props.backgroundImage} alt={props.alt}/>
  )
}

export default Circle;