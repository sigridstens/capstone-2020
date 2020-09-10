import React, {useEffect, useState} from "react";
import '../App.css';
import {Link, withRouter} from 'react-router-dom';


const Navigation = (props) => {
    //const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [route, setRoute] = useState('');

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);


    const showNav = () => {
        return (
            <header className="App-header">

                <Link to="/" className="logo">
                    <h1>The Museum of Lost Experiences</h1>
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/" className={`${route === '/portfolio' ? 'main-nav-active-link' : ''}`}>Navigation</Link>
                            <ul>
                                <li>
                                    <Link to="/">Sub-link 1</Link>
                                </li>

                                <li>
                                    <Link to="/">Sub-link 2</Link>
                                </li>

                                <li>
                                    <Link to="/">Sub-link 3</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to="/participate" className={`${route === '/participate' ? 'main-nav-active-link' : ''}`}>How to Participate</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link' : ''}`}>About</Link>
                        </li>

                    </ul>
                </nav>
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