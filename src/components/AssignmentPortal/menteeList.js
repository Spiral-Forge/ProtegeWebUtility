import React, { Component } from "react";
import { applyZeroMenteeFilter, applyBranchFilter } from "./filtering";

export default class MenteeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unassignedFlag: false,
      branchSelect: "None",
      filteredList: this.props.menteeList,
    };
  }
  componentWillReceiveProps() {
    this.setState({ filteredList: this.props.menteeList });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var filteredArr = this.props.menteeList;
    console.log("arr before any filtering", filteredArr);
    if (this.state.unassignedFlag) {
      filteredArr = applyZeroMenteeFilter(filteredArr);
    }
    if (this.state.branchSelect != "None") {
      filteredArr = applyBranchFilter(filteredArr, this.state.branchSelect);
    }
    console.log("array after filtering", filteredArr);
    this.setState({ filteredList: filteredArr });
  };

  handleCheckboxes = (e) => {
    if (e.target.checked) {
      this.setState({ [e.target.name]: true });
    } else {
      this.setState({ [e.target.name]: false });
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.menteeList);
    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "inline-block",
          width: "25%",
        }}
      >
        <p>No of mentees: {this.props.menteeList.length}</p>
        <form onSubmit={this.handleSubmit}>
          <p className="filterLabel">FILTERS:</p>
          <label className="filterLabel">
            Select branch:
            <select
              name="branchSelect"
              value={this.state.branchSelect}
              onChange={this.handleChange}
            >
              <option value="None">None</option>
              <option value="Computer Science Engineering">Computer Science Engineering</option>
              <option value="Information Technology Engineering">Information Technology Engineering</option>
              <option value="Computer Science and AI Engineering">Computer Science and AI Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Mechanical and Automation Engineering">Mechanical and Automation Engineering</option>
            </select>
          </label>
          <br />
          <input
            type="checkbox"
            id="Open"
            name="unassignedFlag"
            value={true}
            onChange={this.handleCheckboxes}
          />
          <label className="filterLabel">
            <p> Unassigned </p>
          </label>
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <hr></hr>
        <ul style={{ padding: "0px", margin: "5px" }}>
          {this.state.filteredList.map((item, index) => (
            <li onClick={() => this.props.openMenteeProfile(item)}>
              <div className="list-group-item">
                Name: {item.name}
                <br />
                Branch:{item.branch}
                <br />
                No of mentors: {item.peerId ? item.peerId.length : "unknown"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
