import React, { Component } from "react";

export default class EventCard extends Component {
  render() {
    const { event } = this.props;
    return (
      <li>
        {/* <div> 
          <p>{this.props.event.name}</p>
      </div> */}
        <div className="card" style={{ width: "18rem", margin: "15px" }}>
          <img
            style={{ height: "200px" }}
            src={event.url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <h6 className="card-text">
              When: {event.date} At {event.time}
            </h6>
            <h6 className="card-text">Where: {event.venue}</h6>
            <p className="card-text">{event.description}</p>
            <a href={event.link} className="btn btn-primary">
              Register
            </a>
          </div>
        </div>
      </li>
    );
  }
}
