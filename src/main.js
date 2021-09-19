import React, { Component } from "react";
import AssignmentPage from "./components/AssignmentPortal/assignmentPage";
import EventsPage from "./components/EventPortal/eventsPage";
import ResourcesPage from "./components/ResourcePortal/resourcesPage";
import UserSearch from "./components/UserSearch/userSearch";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Common/navbar";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthContext";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AuthProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} />}
            ></Route>
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            ></Route>
            <Route
              exact
              path="/usersearch"
              render={(props) => <UserSearch {...props} />}
            ></Route>
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
              render={(props) => <EventsPage {...props} />}
            ></Route>
          </Switch>
        </AuthProvider>
      </div>
    );
  }
}
