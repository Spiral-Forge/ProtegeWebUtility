import React, { Component } from 'react';

export default class EventCard extends Component {
  render() {
    return (
        <li>
      <div> 
          <p>{this.props.event.name}</p>
      </div>
      </li>
    );
  }
}
