import React, { Component } from 'react';

export default class EventCard extends Component {
  render() {
    const {event}=this.props
    return (
        <li>
      {/* <div> 
          <p>{this.props.event.name}</p>
      </div> */}
      <div class="card" style={{width: "18rem",margin:"15px"}}>
        <img style={{height:"200px"}} src={event.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{event.name}</h5>
          <h6 class="card-text">When: {event.date} At {event.time}</h6>
          <h6 class="card-text">Where: {event.venue}</h6>
          <p class="card-text">{event.description}</p>
          <a href={event.link} class="btn btn-primary">Register</a>
        </div>
      </div>
      </li>
    );
  }
}
