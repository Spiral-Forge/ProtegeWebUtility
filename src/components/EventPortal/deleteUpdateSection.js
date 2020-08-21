import React, { Component } from 'react';
import DeleteForm from './deleteForm';
import UpdateSection from './updateSection'

export default class DeleteUpdateSection extends Component {
  render() {
    return (
        <div className="parent" style={{backgroundColor:"#f3f3f3",display:"inline-block",width:"33.33%"}}>
      <DeleteForm deleteEvent={this.props.deleteEvent}/>
      <br />
      <br />
      <UpdateSection updateEvent={this.props.updateEvent} getEvent={this.props.getEvent} eventToUpdate={this.props.eventToUpdate}/>
      </div>
    );
  }
}
