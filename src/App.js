import React from 'react';
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Home from './home/home.js';
import About from './about/about.js';
import Participate from './participate/participate.js';
import Explore from './explore/explore.js';
import {BrowserRouter, Route} from 'react-router-dom';
import FullCollection from "./full-collection/full-collection";
import ExhibitGallery from "./exhibit-gallery/exhibit-gallery";
import Submission from "./submission/submission";
import ExhibitsOverview from "./exhibits-overview/exhibits-overview";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/participate" component={Participate} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/full-collection" component={FullCollection} />
            <Route exact path="/current-exhibits" component={ExhibitsOverview} />
            <Route exact path="/exhibit/:title" component={ExhibitGallery} />
            <Route exact path="/submission/:id" component={Submission} />
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
