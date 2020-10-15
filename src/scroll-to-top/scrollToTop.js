import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


// This is one of very few class components. Why not use a functional component with a useEffect lifecycle method instead?
// The rest of the project uses functional components.
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);