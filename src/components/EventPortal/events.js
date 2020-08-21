import React, { Component } from 'react';
import EventCard from './eventCard';


export default class Events extends Component {


  render() {
    return (
      <div className="parent" style={{backgroundColor:"#f3f3f3",display:"inline-block",width:"33.33%"}}>
        <h2>Event List</h2>
          <ul>
          {this.props.eventList.map((event, index) => (
           <EventCard event={event} />
        ))}
        </ul>
      </div>
    );
  }
}
