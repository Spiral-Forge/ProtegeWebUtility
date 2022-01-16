import React, { Component } from "react";

export default class MentorMatches extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "inline-block",
          width: "25%",
        }}
      >
        <p>No of mentors: {this.props.mentorList.length}</p>
        <ul style={{ padding: "0px", margin: "5px" }}>
          {this.props.mentorList.map((item, index) => (
            <li
              style={{
                textDecoration:
                  item.peerId == null || item.peerId.length == 0
                    ? "none"
                    : "line-through",
              }}
              onClick={() => this.props.openMentorProfile(item)}
            >
              <div className="list-group-item">
                Name: {item.name}
                <br />
                Branch:{item.branch}
                <br />
                {item.peerId ? item.peerId.length : "unknown"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
