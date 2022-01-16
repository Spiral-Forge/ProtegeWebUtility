import React, { Component } from "react";
import UserCard from "../Common/userCard";
import Dropdown from "react-dropdown";
//import { Dropdown } from 'semantic-ui-react'
const options = ["one", "two", "three"];
const defaultOption = options[0];

export default class MenteeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBranch: "None",
      selectedDomains: [],
      selectedLanguages: [],
      zeroMenteesFlag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // _onSelect = event => {
  //   console.log(event.target.value)
  //   this.setState({
  //     selectedBranch: event.target.value
  //   });
  //};

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    //no preference filtering conditions to send to parent filtering method
    var domains = this.state.selectedDomains;
    var langs = this.state.selectedLanguages;
    var branch = this.state.selectedBranch;
    if (
      this.state.selectedDomains.length == 0 ||
      (this.state.selectedDomains.length == 1 &&
        this.state.selectedDomains[0] == "No Preference")
    ) {
      domains = null;
    }
    if (
      this.state.selectedLanguages.length == 0 ||
      (this.state.selectedLanguages.length == 1 &&
        this.state.selectedLanguages[0] == "No Preference")
    ) {
      langs = null;
    }
    if (this.state.selectedBranch == "None") {
      branch = null;
    }
    this.props.addFilters(
      branch,
      domains,
      langs,
      this.state.zeroMenteesFlag
    );
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // handleOptionChange=(e)=>{
  //   console.log(e.target.value)

  // }
  handleOptionChangeDomain = (event) => {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      this.state.selectedDomains.push(value);
    } else {
      console.log("got called but ");
      this.state.selectedDomains = this.state.selectedDomains.filter(
        (val) => val != value
      );
      //this.state.selectedDomains.splice(value, 1);
    }
  };

  handleOptionChangeLang = (event) => {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      this.state.selectedLanguages.push(value);
    } else {
      console.log("got called but ");
      this.state.selectedLanguages = this.state.selectedLanguages.filter(
        (val) => val != value
      );
      //this.state.selectedDomains.splice(value, 1);
    }
  };

  handleCheckboxes = (e) => {
    if (e.target.checked) {
      this.setState({ [e.target.name]: e.target.value });
    }else{
      this.setState({ [e.target.name]: false });
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f3f3f3",
          display: "inline-block",
          width: "25%",
          padding: "10px",
        }}
      >
        <div>
          <UserCard user={this.props.user} />
        </div>
        <hr></hr>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p className="filterLabel">FILTERS:</p>
            <label className="filterLabel">
              Select branch:
              <select
                name="selectedBranch"
                value={this.state.selectedBranch}
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
            <hr></hr>
            <label className="filterLabel">
              <p>Select domain: </p>
            </label>
            <br></br>
            <input
              type="checkbox"
              id="Development"
              name="domain"
              value="Web Development"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Development"> Web Development</label>
            <br />
            <input
              type="checkbox"
              id="College"
              name="domain"
              value="App Development"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="College"> App Development</label>
            <br />
            <input
              type="checkbox"
              id="Machine"
              name="domain"
              value="Machine Learning"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Machine"> Machine Learning</label>
            <br />
            <input
              type="checkbox"
              id="Scholarship"
              name="domain"
              value="IOT"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Scholarship"> IOT</label>
            <br />
            <input
              type="checkbox"
              id="Competitive"
              name="domain"
              value="Competitive Programming"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Competitive"> Competitive Coding</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="No Preference"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> No Preference</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="BlockChain"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> BlockChain</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="AR/VR"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> AR/VR</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="Game Development"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> Game Development</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="Cloud Engineering"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> Cloud Engineering</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="Cyber Security"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> Cyber Security</label>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="domain"
              value="Open Source"
              onChange={this.handleOptionChangeDomain}
            />
            <label htmlfor="Open"> Open Source</label>
            <br />
            <hr></hr>
            <label className="filterLabel">
              <p>Select languages: </p>
            </label>
            <br></br>
            <input
              type="checkbox"
              id="male"
              name="lang"
              value="C++"
              onChange={this.handleOptionChangeLang}
            />
            <label htmlfor="male"> C++ </label>
            <input
              type="checkbox"
              id="female"
              name="lang"
              value="Java"
              onChange={this.handleOptionChangeLang}
            />
            <label htmlfor="female"> Java </label>
            <br />
            <input
              type="checkbox"
              id="other"
              name="lang"
              value="Python"
              onChange={this.handleOptionChangeLang}
            />
            <label htmlfor="other"> Python </label>
            <input
              type="checkbox"
              id="Open"
              name="lang"
              value="No Preference"
              onChange={this.handleOptionChangeLang}
            />
            <label htmlfor="Open"> No Preference</label>
            <br />

            <hr></hr>
            <br />
            <input
              type="checkbox"
              id="Open"
              name="zeroMenteesFlag"
              value={true}
              onChange={this.handleCheckboxes}
            />
            <label className="filterLabel">
              <p> 0 mentees </p>
            </label>

            <br />

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
