import React, { Component } from 'react';
import EventCard from './eventCard';

export default class Events extends Component {


  render() {
    return (
      <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"33.33%"}}>
          <ul>
          {this.props.eventList.map((event, index) => (
           <EventCard event={event} />
        ))}
        </ul>
      </div>
    );
  }
}
