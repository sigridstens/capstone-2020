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
import ScrollToTop from "./scroll-to-top/scrollToTop";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
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


// Overall the use of routing is nice. Each page has a purpose and isnt too bloated with information.
// Components for the most part are nicely broken out so no file is too large.
// Life cycles methods through react are used which shows understanding.
// CSS files for the most part only relate to the components they are named for. and they are small, easy to read.
// Naming for the most part is pretty good. Some are too generic and force an incoming developer to run the app and inspect the page to find out their purpose.
// Good reuse of components and you took advantage of built in REACT components. Creating them on your own would have been a waste of time.
// Overall formatting and style could be more consistent. This will help anyone new to the project.
// Data could be moved outside the project, but this is a work in progress.
