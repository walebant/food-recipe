import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import Chat from './views/Chat'

function App() {
  return (
    <Router>
      <div className="App">
      <Chat />
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/details">Details</Link> */}

        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>

          <Route path="/details">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
