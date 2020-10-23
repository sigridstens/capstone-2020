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
      <ul className="filter-nav">
        <li>
          <i className="fas fa-search search-icon"/>
        </li>
        <li>medium
          <ul className="filter-options">
            <li>drawing</li>
            <li>painting</li>
            <li>collage</li>
            <li>digital art</li>
            <li>sculpture</li>
            <li>fabric, yarn, thread, or textile</li>
            <li>music or sound</li>
            <li>photography</li>
            <li>technology</li>
            <li>food</li>
            <li>other</li>
          </ul>
        </li>
        <li>submitter age
          <ul className="filter-options">
            <li>under 20</li>
            <li>21-30</li>
            <li>31-40</li>
            <li>41-50</li>
            <li>51-60</li>
            <li>61-70</li>
            <li>71-80</li>
            <li>over 80</li>
          </ul>
        </li>
        <li>sort by
          <ul className="filter-options">
            <li>age (low to high)</li>
            <li>date submitted (recent first)</li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default SubmissionFiltering;