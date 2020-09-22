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
                {/*🦐*/}
                <Link to="/" className="logo">
                    <img className="logo" src={process.env.PUBLIC_URL + '/MoLE-logo-horizontal.png'}  alt="Logo for the Museum of Lost Experiences" />
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className={` ${route === '/portfolio' ? 'main-nav-active-link' : ''}`}>Collection</Link>
                            <ul className="sub-nav">
                                <li>
                                    <Link to="/">Entire Collection</Link>
                                </li>

                                <li>
                                    <Link to="/">Featured Exhibits</Link>
                                </li>

                                <li>
                                    <Link to="/">Something Random </Link>
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