import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Default";
import Diary from "./pages/Diary";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/saved" component={Diary} />
          <Route exact path="/saved/:id" component={Search} />
          { /* <Route component={NoMatch} /> */ }
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;