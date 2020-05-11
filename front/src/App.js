import React/*, { useState, useEffect }*/ from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route/*,
  Redirect*/
} from "react-router-dom";
import "./scss/styles.scss"

import Habit from './Components/Habit'

function App() {

  return (
    <Router>
      <Switch>
        {/* <Route path="/login">
            {user? <Redirect to="/"/>:<Login />}
          </Route> */}
        {<Route path="/d3">
          <Habit
            title="ToJog"
            userEmail="jm.contreras10@uniandes.edu.co" />
        </Route>}
      </Switch>
    </Router>
  );
}

export default App;
