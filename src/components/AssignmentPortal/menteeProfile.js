import React, { Component } from "react";
import UserCard from "../Common/userCard";
import Dropdown from "react-dropdown";
import firebase from "firebase";
const db=firebase.firestore();

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
   componentDidMount= async ()=>{
      this.getLanguageData();
      this.getDomainData();
   }
   getDomainData = async ()=>{
    await db
    .collection("domains")
    .get()
    .then(async (querySnapshot) => {
      var domainData = querySnapshot.docs.map((a) => {
        const data = a.data();
        const id = a.id;
        return { id, ...data };
      });
      this.setState({ selectedDomains: domainData });
    });    
   }
   getLanguageData = async ()=>{
    await db
    .collection("languages")
    .get()
    .then(async (querySnapshot) => {
      var langData = querySnapshot.docs.map((a) => {
        const data = a.data();
        const id = a.id;
        return { id, ...data };
      });
      this.setState({ selectedLanguages: langData });
    });    
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
    const {selectedLanguages}=this.state;
    const {selectedDomains}=this.state;
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
            <div >
              {selectedDomains.map(selectedDomains => (
                <div key={selectedDomains.id} >
                    <input
                      type="checkbox"
                      id="Open"
                      name="domain"
                      onChange={this.handleOptionChangeDomain}
                    />
                    <label htmlfor="Open"> {selectedDomains.label}</label>
                    <br></br>
                </div>
              ))}
            </div>
            <hr></hr>
            <label className="filterLabel">
              <p>Select languages: </p>
            </label>
            <br></br>
            
            <div >
              {selectedLanguages.map(selectedLanguages => (
                <div key={selectedLanguages.id} >
                    <input
                      type="checkbox"
                      id="male"
                      name="lang"
                      onChange={this.handleOptionChangeLang}
                />
                    <label htmlFor="male"> {selectedLanguages.value}</label>
                </div>
              ))}
            </div>
            
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
