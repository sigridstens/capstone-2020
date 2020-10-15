import React, {useEffect, useState} from "react";
import './header.css';
import {Link, withRouter} from 'react-router-dom';
import {submissions} from "../full-collection/full-collection";


const Navigation = (props) => {
    // Remove if unused?
    //const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [route, setRoute] = useState('');

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);

    let getRandomURL = () => {
        let randomSubmission = Math.floor((Math.random() * submissions.length));
        // no reason to make this a variable. just do
        // return submissions[randomSubmission].linkpath;
        let randomURL = submissions[randomSubmission].linkpath;
        return randomURL;
    // Missing semicolon
    }


    // Why is this a variable? Why not return directly?
    const showNav = () => {
        return (
            <header>

                <h1>
                    {/* What is this comment below for? */}
                    {/*🦐*/}
                    <Link to="/" className="logo">
                        {/* line too long */}
                        <img className="logo" src={process.env.PUBLIC_URL + '/MoLE-logo-horizontal.png'}  alt="Logo for the Museum of Lost Experiences" />
                    </Link>
                </h1>

                <nav className="navigation main-nav">
                    <ul>
                        <li className="nav-item">
                            {/* You could take this whole ul and make it into a component. Nested lists are a little hard to read. */}
                            <Link to="/explore" className={` ${route === '/explore' ? 'main-nav-active-link' : ''}`}>Explore</Link>
                            <ul className="sub-nav">
                                <li className="sub-nav-item">
                                    <Link to="/full-collection">Full Collection</Link>
                                </li>

                                <li className="sub-nav-item">
                                    <Link to="/current-exhibits">Exhibits</Link>
                                </li>

                                <li className="sub-nav-item">
                                    <Link to={getRandomURL()}>Random Submission</Link>
                                </li>
                            {/* for consistent formatting you can remove this line. */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/participate" className={`${route === '/participate' ? 'main-nav-active-link' : ''}`}>Participate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link' : ''}`}>About</Link>
                        </li>
                    </ul>
                </nav>

                {/* There is an inconsistent patterns of using self closing and non self closing divs throughout the project*/}
                <div className="rectangle-shape shape"/>
            </header>
            )
        };


    // Use react fragments to wrap components. They wont add extra divs the DOM.
    // return(
    //   <React.Fragment>
    //       {showNav()}
    //   </React.Fragment>
    // )
    // or shorthand which works the same:
    // return(
    //   <>
    //       {showNav()}
    //   </>
    // )
        return(
            <div>
                {showNav()}
            </div>
        )
};


export default withRouter(Navigation);