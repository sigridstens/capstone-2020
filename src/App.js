import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import Home from './Home/home.js';
import About from './About/about.js';
import Participate from './Participate/participate.js';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/participate" component={Participate} />
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
