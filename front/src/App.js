import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./scss/styles.scss"
import Login from "./components/Login"
import Base from "./components/Base"
import LandPage from "./components/LandPage"
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/auth/user")
      .then(res => res.json())
      .then(usr => {
        console.log(usr);
        setUser(usr);
      })
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/platform" /> : <Login />}
        </Route>
        <Route path="/platform">
          {user ? <Base user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <LandPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
