import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom;"
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import SavedContainer from "./components/SavedContainer";
import NoMatch from "./components/NoMatch";




function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchContainer />
          </Route>
          <Route exact path="/saved">
            <SavedContainer />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App;