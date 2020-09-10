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
                    <h1>Sigrid Stensvold</h1>
                    <h2>graphic & web designer</h2>
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/portfolio" className={`${route === '/portfolio' ? 'main-nav-active-link' : ''}`}>Portfolio</Link>
                            <ul>
                                <li>
                                    <Link to="/portfolio">Graphic Design</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Illustration</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Motion Design</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Painting</Link>
                                </li>

                                <li>
                                    <Link to="/portfolio">Web Development</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to="/resume" className={`${route === '/resume' ? 'main-nav-active-link' : ''}`}>Resume</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${route === '/about' ? 'main-nav-active-link' : ''}`}>About Me</Link>
                        </li>

                        <li>
                            <Link to="/contact" className={`${route === '/contact' ? 'main-nav-active-link' : ''}`}>Contact</Link>
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