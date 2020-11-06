import React, {useEffect, useState} from "react";
import './header.css';
import {Link, withRouter} from 'react-router-dom';
import axios from "axios";


const Navigation = (props) => {
    const [route, setRoute] = useState('');

    const [submissionData, setSubmissionData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://p1vu0ulxhc.execute-api.us-east-2.amazonaws.com/beta/data');
            setSubmissionData(response.data.Items);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);

    function toggleNav() {
        const mainNav = document.getElementsByClassName("main-nav")[0];

        mainNav.classList.toggle("nav-open");
    }

    let getRandomURL = () => {
        if (submissionData.length > 0) {
            let randomSubmission = Math.floor((Math.random() * submissionData.length));
            console.log(submissionData[randomSubmission]);
            let randomURL = submissionData[randomSubmission].linkpath;
            return randomURL;
        } else {
            return "";
        }
    }


    const showNav = () => {
        return (
            <header>
                <h1>
                    {/*🦐*/}
                    <Link to="/" className="logo">
                        <img className="logo" src={process.env.PUBLIC_URL + '/MoLE-logo-horizontal.png'}  alt="Logo for the Museum of Lost Experiences" />
                    </Link>
                </h1>

                <nav className="navigation main-nav">
                    <i className="fas fa-bars menu-icon" onClick={toggleNav}/>
                    <i className="fas fa-times close-icon" onClick={toggleNav}/>
                    <ul>
                        <li className="nav-item">
                            <Link to="/explore" className={` ${route === '/explore' ? 'main-nav-active-link' : ''}`} onClick={toggleNav}>Explore</Link>
                            <ul className="sub-nav">
                                <li className="sub-nav-item" onClick={toggleNav}>
                                    <Link to="/full-collection">Full Collection</Link>
                                </li>

                                {/*<li className="sub-nav-item" onClick={toggleNav}>
                                    <Link to="/current-exhibits">Exhibits</Link>
                                </li>*/}

                                <li className="sub-nav-item" onClick={toggleNav}>
                                    <Link to={getRandomURL()}>Random Submission</Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item" >
                            <Link to="/participate" className={`${route === '/participate' ? 'main-nav-active-link' : ''}`} onClick={toggleNav}>Participate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link' : ''}`} onClick={toggleNav}>About</Link>
                        </li>
                    </ul>
                </nav>

                <div className="rectangle-shape shape"/>
            </header>
            )
        };


        return(
            <>
                {showNav()}
            </>
        )
};


export default withRouter(Navigation);