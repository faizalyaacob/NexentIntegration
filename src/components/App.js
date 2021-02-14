import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage'
import GoogleApi from "../views/GoogleApi";
import Integration from "./Integration/Integration";


function App(){

  const routing = (
      <Router>
          <React.StrictMode>  
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/integration" component={Integration} />
                  <Route exact path="/google" component={GoogleApi} />
              </Switch>
          </React.StrictMode>
      </Router>
  );

  return (
      <div>
          {routing}
      </div>
  );
}

export default App;