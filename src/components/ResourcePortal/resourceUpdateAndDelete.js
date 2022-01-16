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
              id="Develop"
              name="domain"
              value="Development"
              checked={this.state.selectedDomain === "Development"}
              onChange={this.handleOptionChange}
            />
            <label for="Develop">Development</label>
            <br />
            <input
              type="radio"
              id="Collge"
              name="domain"
              value="College"
              checked={this.state.selectedDomain === "College"}
              onChange={this.handleOptionChange}
            />
            <label for="Collge">College</label>
            <br />
            <input
              type="radio"
              id="MLearn"
              name="domain"
              value="Machine Learning"
              checked={this.state.selectedDomain === "Machine Learning"}
              onChange={this.handleOptionChange}
            />
            <label for="MLearn">Machine Learning</label>
            <br />
            <input
              type="radio"
              id="Scholarship"
              name="domain"
              value="Scholarships"
              checked={this.state.selectedDomain === "Scholarships"}
              onChange={this.handleOptionChange}
            />
            <label for="Scholarship">Scholarship</label>
            <br />
            <input
              type="radio"
              id="Comp"
              name="domain"
              value="Competitive Coding"
              checked={this.state.selectedDomain === "Competitive Coding"}
              onChange={this.handleOptionChange}
            />
            <label for="Comp">Competitive Coding</label>
            <br />
            <input
              type="radio"
              id="OpenS"
              name="domain"
              value="Open Source"
              checked={this.state.selectedDomain === "Open Source"}
              onChange={this.handleOptionChange}
            />
            <label for="OpenS">Open Source</label>
            <br />
            <input
              type="radio"
              id="Articles"
              name="domain"
              value="Blogs and Articles"
              checked={this.state.selectedDomain === "Blogs and Articles"}
              onChange={this.handleOptionChange}
            />
            <label for="Articles">Blogs And Articles</label>
            <br/>
           
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
                    <div className="card-header">{res.title}</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{res.link}</li>
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
