import React, { Component } from "react";

export default class ResourceUpdateAndDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDomain: "Development",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getResources(this.state.selectedDomain);
    // this.setState({

    // })
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedDomain: event.target.value,
    });
  };
  handleDelete = (id) => {
    this.props.onDelete(this.state.selectedDomain, id);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "inline-block",
          width: "50%",
        }}
      >
        <div style={{ textAlign: "center", padding: "35px" }}>
          <h2>View and Delete Resources</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="radio"
              id="male"
              name="domain"
              value="Development"
              checked={this.state.selectedDomain === "Development"}
              onChange={this.handleOptionChange}
            />
            <label for="male">Development</label>
            <br />
            <input
              type="radio"
              id="female"
              name="domain"
              value="College"
              checked={this.state.selectedDomain === "College"}
              onChange={this.handleOptionChange}
            />
            <label for="female">College</label>
            <br />
            <input
              type="radio"
              id="other"
              name="domain"
              value="ML"
              checked={this.state.selectedDomain === "ML"}
              onChange={this.handleOptionChange}
            />
            <label for="other">Machine Learning</label>
            <br />
            <input
              type="radio"
              id="other"
              name="domain"
              value="Scholarship"
              checked={this.state.selectedDomain === "Scholarship"}
              onChange={this.handleOptionChange}
            />
            <label for="other">Scholarship</label>
            <br />
            <input
              type="radio"
              id="other"
              name="domain"
              value="CompCoding"
              checked={this.state.selectedDomain === "CompCoding"}
              onChange={this.handleOptionChange}
            />
            <label for="other">Competitive Coding</label>
            <br />
            <input
              type="radio"
              id="other"
              name="domain"
              value="OpenSource"
              checked={this.state.selectedDomain === "OpenSource"}
              onChange={this.handleOptionChange}
            />
            <label for="other">Open Source</label>
            <br />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
        <div>
          {this.props.resourceList.length > 0 ? <h2>Resources</h2> : null}
          <ul style={{ display: "inline-block" }}>
            {this.props.resourceList.map((res) => {
              return (
                <li style={{ margin: "15px" }}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">{res.Title}</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{res.Link}</li>
                      <li className="list-group-item">
                        <button onClick={() => this.handleDelete(res.id)}>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
