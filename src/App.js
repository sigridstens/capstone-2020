import React from 'react';
import './App.css';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Home from './home/home.js';
import About from './about/about.js';
import Explore from './explore/explore.js';
import {BrowserRouter, Route} from 'react-router-dom';
import FullCollection from "./full-collection/full-collection";
import ExhibitGallery from "./exhibit-gallery/exhibit-gallery";
import Submission from "./submission/submission";
import ExhibitsOverview from "./exhibits-overview/exhibits-overview";
import ScrollToTop from "./scroll-to-top/scrollToTop";
import Participate from "./participate/participate";

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <div className="modalOverlay"/>
            <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/participate" component={Participate} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/full-collection" component={FullCollection} />
              <Route exact path="/current-exhibits" component={ExhibitsOverview} />
              <Route exact path="/exhibit/:exhibitName" component={ExhibitGallery} />
              <Route exact path="/submission/:id" component={Submission} />
              <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
  );
}

export default App;
