import React, { Component } from "react";
import EventCard from "./eventCard";
import EventUpdateForm from "./eventUpdateForm";

export default class UpdateSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getEvent(this.state.name);
    this.setState({
      name: "",
    });
  };
  render() {
    console.log(this.props.eventToUpdate);
    var updatePart =
      Object.keys(this.props.eventToUpdate).length === 0 ? null : (
        <EventUpdateForm
          updateEvent={this.props.updateEvent}
          event={this.props.eventToUpdate}
        />
      );
    console.log("update event", this.props.eventToUpdate);
    return (
      <div>
        <h2>Update section</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">EventName:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <div>{updatePart}</div>
      </div>
    );
  }
}
