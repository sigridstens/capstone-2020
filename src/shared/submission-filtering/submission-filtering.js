import React from 'react';
import './sumission-filtering.css';


function SubmissionFiltering() {
  function toggleOpen() {
    const filterNav = document.getElementsByClassName("filter-nav")[0];
    console.log(filterNav);

    filterNav.classList.toggle("nav-open");
  }

  return (
    <nav className="filtering">
      <h5 onClick={toggleOpen}>filter exhibit</h5>
      <i className="fas fa-search search-icon"/>
      <ul className="filter-nav">
        <li>medium
          <ul className="filter-options">
            <li>collage</li>
            <li>painting</li>
            <li>digital art</li>
            <li>collage</li>
            <li>painting</li>
            <li>digital art</li>
          </ul>
        </li>
        <li>submitter age</li>
        <li>tags</li>
        <li>sort by</li>
      </ul>
    </nav>
  )
}

export default SubmissionFiltering;