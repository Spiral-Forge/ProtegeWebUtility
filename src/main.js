import React, { Component } from "react";
import AssignmentPage from "./components/AssignmentPortal/assignmentPage";
import EventsPage from "./components/EventPortal/eventsPage";
import ResourcesPage from "./components/ResourcePortal/resourcesPage";
import UserSearch from "./components/UserSearch/userSearch";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Common/navbar";
import Event from "./components/Events/Event";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />}></Route>
          <Route
            exact
            path="/usersearch"
            render={(props) => <UserSearch {...props} />}
          ></Route>
          <Route
            exact
            path="/resources"
            render={(props) => <ResourcesPage {...props} />}
          ></Route>
          <Route
            exact
            path="/assignment"
            render={(props) => <AssignmentPage {...props} />}
          ></Route>
          <Route
            exact
            path="/events"
            render={(props) => <Event {...props} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}
