import React, {useEffect, useState} from "react";
import './header.css';
import {Link, withRouter} from 'react-router-dom';


const Navigation = (props) => {
    //const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [route, setRoute] = useState('');

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);


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
                    <ul>
                        <li className="nav-item">
                            <Link to="/explore" className={` ${route === '/explore' ? 'main-nav-active-link' : ''}`}>Explore</Link>
                            <ul className="sub-nav">
                                <li className="sub-nav-item">
                                    <Link to="/">Full Collection</Link>
                                </li>

                                <li className="sub-nav-item">
                                    <Link to="/">Exhibits</Link>
                                </li>

                                <li className="sub-nav-item">
                                    <Link to="/">Random Submission</Link>
                                </li>

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

                <div className="rectangle-shape shape"/>
            </header>
            )
        };


        return(
            <div>
                {showNav()}
            </div>
        )
};


export default withRouter(Navigation);