import React, { Component } from 'react';
import AssignmentPage from './components/AssignmentPortal/assignmentPage';
import EventsPage from './components/EventPortal/eventsPage'
import ResourcesPage from './components/ResourcePortal/resourcesPage';
import HomePage from './components/Home/homePage'
import {Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Common/navbar';

export default class Main extends Component {
  render() {
    return (
      <div> 
          <Navbar />
          <Switch>
          <Route exact path="/" render={props => <HomePage {...props}/> }></Route>
          <Route exact path="/resources"  render={props => <ResourcesPage {...props}/>}></Route>
          <Route exact path="/assignment"  render={props =>  <AssignmentPage {...props}/>}></Route>
          <Route exact path="/events" render={props => <EventsPage {...props}/> }></Route>
        </Switch>
      </div>
    );
  }
}
