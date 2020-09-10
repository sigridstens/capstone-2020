import React, {useEffect, useState} from "react";
import '../App.css';
import {Link, withRouter} from 'react-router-dom';


const Navigation = (props) => {
    //const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [route, setRoute] = useState('');

    useEffect(() => {
        setRoute(props.location.pathname);
    }, [props.location]);

    /*useEffect(() => {
        return ((!typeof window !=== 'object'));

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);*/

    const showNav = () => {
        return (
            <header className="App-header">

                <Link to="/" className="logo">
                    <h1>The Museum of Lost Experiences</h1>
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/" className={`${route === '/portfolio' ? 'main-nav-active-link' : ''}`}>placeholder</Link>
                            <ul>
                                <li>
                                    <Link to="/">Graphic Design</Link>
                                </li>

                                <li>
                                    <Link to="/">Illustration</Link>
                                </li>

                                <li>
                                    <Link to="/">Motion Design</Link>
                                </li>

                                <li>
                                    <Link to="/">Painting</Link>
                                </li>

                                <li>
                                    <Link to="/">Web Development</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to="/resume" className={`${route === '/home' ? 'main-nav-active-link' : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link' : ''}`}>About Me</Link>
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