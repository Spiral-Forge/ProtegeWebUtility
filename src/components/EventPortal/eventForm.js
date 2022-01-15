import React, { Component } from "react";

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      description: "",
      imageUrl: "",
      venue: "",
      time: "",
      link: "",
    };
  }
  componentWillReceiveProps() {
    console.log(this.props);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("coming here");
    this.props.saveEvent({ ...this.state });
    this.setState({
      name: "",
      date: "",
      description: "",
      imageUrl: "",
      venue: "",
      time: "",
      link: "",
    });
  };
  render() {
    const { name, date, venue, imageUrl, time, description, link } = this.state;
    //const {event}=this.props

    return (
      <div
        className="parent"
        style={{
          backgroundColor: "#eeeeee",
          display: "inline-block",
          width: "33.33%",
        }}
      >
        <h2>Add an event</h2>
        <div style={{ padding: "15px" }}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">EventName:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="date">Date:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="date">URL:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="date">Venue:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="venue"
              name="venue"
              value={venue}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="date">Time:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="time"
              name="time"
              value={time}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="date">Description:</label>
            <br />
            <textarea
              className="form-control"
              type="text"
              id="description"
              name="description"
              rows="4"
              cols="50"
              value={description}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="link">Link:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="link"
              name="link"
              value={link}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
