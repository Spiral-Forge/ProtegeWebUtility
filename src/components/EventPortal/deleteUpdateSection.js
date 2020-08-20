import React, { Component } from 'react';
import DeleteForm from './deleteForm';
import UpdateSection from './updateSection'

export default class DeleteUpdateSection extends Component {
  render() {
    return (
        <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"33.33%"}}>
      <DeleteForm deleteEvent={this.props.deleteEvent}/>
      <UpdateSection updateEvent={this.props.updateEvent} getEvent={this.props.getEvent} eventToUpdate={this.props.eventToUpdate}/>
      </div>
    );
  }
}
