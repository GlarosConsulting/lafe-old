import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  useEffect(() => {
    // ReactGA.initialize('UA-176083911-1');
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lafe</title>
      </Helmet>

      <h1>App</h1>
    </>
  );
};

export default App;
