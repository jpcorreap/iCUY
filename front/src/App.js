import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./scss/styles.scss"
function App() {
 
  return (
    <Router>
        <Switch>
          {/* <Route path="/login">
            {user? <Redirect to="/"/>:<Login />}
          </Route> */}
        </Switch>
    </Router>
  );
}
export default App;
