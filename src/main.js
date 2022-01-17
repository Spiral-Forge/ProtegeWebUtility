import React, { Component, useEffect } from "react";
import AssignmentPage from "./components/AssignmentPortal/assignmentPage";
import ResourcesPage from "./components/ResourcePortal/resourcesPage";
import UserSearch from "./components/UserSearch/userSearch";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Common/navbar";
import Event from "./components/Events/Event";
import Login from "./components/Auth/login";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./components/Auth/privateRoute";
import { auth } from './components/Firebase/firebase'

export default function Main() {

//   useEffect(() => {
//     console.log("hello",currentuser)
//     if(currentuser){
//         userHasAuthenticated(true)
//     }else{
//         userHasAuthenticated(false)
//     }
// }, [currentuser]);

  return (
    <div>
      <Navbar />
      <AuthProvider>
        <Switch>
          {/* <PrivateRoute component={Home} path={"/"} exact /> */}
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} />}
          ></Route>
          {/* <PrivateRoute path="/usersearch" authenticated={this.state.authenticated} component={UserSearch}></PrivateRoute> */}
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
      </AuthProvider>
    </div>
  );
}
