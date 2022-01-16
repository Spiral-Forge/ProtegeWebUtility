import React, { Component } from "react";

export default class ResourceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Link: "",
      selectedDomain: "Development",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.resourceAdd(this.state.selectedDomain, {
      title: this.state.Title,
      link: this.state.Link,
      votes : 0,
      votesMap : {}
    });
    this.setState({
      Title: "",
      Link: "",
      selectedDomain: "Development",
    });
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedDomain: event.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f3f3f3",
          display: "inline-block",
          width: "50%",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "35px" }}>
          <h2>Add Resource</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Title:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="name"
              name="Title"
              value={this.state.Title}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="name">Link:</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="name"
              name="Link"
              value={this.state.Link}
              onChange={this.handleChange}
            />
            <br />
            <label>
              <p>Select domain: </p>
            </label>
            <br></br>
            <input
              type="radio"
              id="Development"
              name="domain"
              value="Development"
              checked={this.state.selectedDomain === "Development"}
              onChange={this.handleOptionChange}
            />
            <label for="Development">Development</label>
            <br />
            <input
              type="radio"
              id="College"
              name="domain"
              value="College"
              checked={this.state.selectedDomain === "College"}
              onChange={this.handleOptionChange}
            />
            <label for="College">College</label>
            <br />
            <input
              type="radio"
              id="ML"
              name="domain"
              value="Machine Learning"
              checked={this.state.selectedDomain === "Machine Learning"}
              onChange={this.handleOptionChange}
            />
            <label for="ML">Machine Learning</label>
            <br />
            <input
              type="radio"
              id="Scholarships"
              name="domain"
              value="Scholarships"
              checked={this.state.selectedDomain === "Scholarships"}
              onChange={this.handleOptionChange}
            />
            <label for="Scholarships">Scholarship</label>
            <br />
            <input
              type="radio"
              id="CP"
              name="domain"
              value="Competitive Coding"
              checked={this.state.selectedDomain === "Competitive Coding"}
              onChange={this.handleOptionChange}
            />
            <label for="CP">Competitive Coding</label>
            <br />
            <input
              type="radio"
              id="OS"
              name="domain"
              value="Open Source"
              checked={this.state.selectedDomain === "Open Source"}
              onChange={this.handleOptionChange}
            />
            <label for="OS">Open Source</label>
            <br />
            <input
              type="radio"
              id="Blogs"
              name="domain"
              value="Blogs and Articles"
              checked={this.state.selectedDomain === "Blogs and Articles"}
              onChange={this.handleOptionChange}
            />
            <label for="Blogs">Blogs And Articles</label>
            <br/>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
