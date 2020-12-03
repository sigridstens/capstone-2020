import React, {useState} from 'react';
import './sumission-filtering.css';


function SubmissionFiltering(props) {
  function toggleOpen() {
    const filterNav = document.getElementsByClassName("filter-nav")[0];

    filterNav.classList.toggle("nav-open");
  }

  let [currentFilter, setCurrentFilter] = useState("");

  const updateFilter = (filterType, event) => {
    const newFilter = {...props.currentFilter};
    newFilter[filterType] = event.target.value;
    props.updateFilter(newFilter);

    setCurrentFilter(newFilter);
  }

  const removeFilter = (filterType) => {
    const updatedFilter = {...props.currentFilter}
    updatedFilter[filterType] = undefined;
    props.updateFilter(updatedFilter);
    setCurrentFilter(updatedFilter);
  }

  return (
    <aside className="filtering-container">
      <nav className="filtering">
        <h5 onClick={toggleOpen}>filter exhibit</h5>
        <ul className="filter-nav">
          <li>
            <i className="fas fa-search search-icon"/>
          </li>
          <li>
            <label>medium
              <select className="filter-options" onChange={(event) => updateFilter('medium', event)}>
                <option value="drawing">drawing</option>
                <option value="painting">painting</option>
                <option value="collage">collage</option>
                <option value="digital art">digital art</option>
                <option value="sculpture">sculpture</option>
                <option value="fabric, yarn, thread, or textile">fabric, yarn, thread, or textile</option>
                <option value="music or sound">music or sound</option>
                <option value="photography">photography</option>
                <option value="music or sound">music or sound</option>
                <option value="technology">technology</option>
                <option value="food">food</option>
                <option value="other">other</option>
              </select>
            </label>
          </li>
          <li>
            <label>submitter age
              <select className="filter-options" onChange={(event) => updateFilter('age', event)}>
                <option value="under 20">under 20</option>
                <option value="21-30">21-30</option>
                <option value="31-40">31-40</option>
                <option value="41-50">41-50</option>
                <option value="51-60">51-60</option>
                <option value="61-70">61-70</option>
                <option value="71-80">71-80</option>
                <option value="over 80">over 80</option>
              </select>
            </label>
          </li>
        </ul>
      </nav>

      <p className="active-filter">
        {currentFilter.age && <button onClick={() => removeFilter("age")} className="remove-filter-button">x {currentFilter.age}</button>}
        {currentFilter.medium && <button onClick={() => removeFilter("medium")} className="remove-filter-button">x {currentFilter.medium}</button>}
      </p>
    </aside>
  )
}

export default SubmissionFiltering;