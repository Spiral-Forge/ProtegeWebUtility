import React, { Component } from "react";
import MenteeList from "./menteeList";
import MenteeProfile from "./menteeProfile";
import MentorMatches from "./mentorMatches";
import MentorProfile from "./mentorProfile";
import EmptyDiv from "./emptyDiv";
import firebase from "../Firebase/firebase";
import "../../stylesheets/assignment.css";
import {
  applyBranchFilter,
  applyHostellerFilter,
  applyDomainsFilter,
  applyLanguagesFilter,
  applyZeroMenteeFilter,
} from "./filtering";

import { notify } from "./notification";
const db = firebase.firestore();
export default class AssignmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menteeProfileOpened: false,
      mentorQueryFired: false,
      mentorProfileOpened: false,
      menteeList: [],
      mentorList: [],
      selectedMentee: {},
      selectedMentor: {},
    };
  }

  componentDidMount() {
    this.getMenteeList();
    this.getMentorList();
  }
  
  getMenteeList = async () => {
    await db
      .collection("users")
      .where("post", "==", "Mentee")
      .get()
      .then(async (querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        console.log(mydata);
        // console.log(process.env.p)
        this.setState({ menteeList: mydata });
      });
  };



  getMentorList = async () => {
    await db
      .collection("users")
      .where("post", "==", "Mentor")
      .get()
      .then((querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          console.log(mydata);
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        this.setState({ mentorList: mydata });
      });
  };

  saveAssignment = async (mentor) => {
    var menteePeerIDCopy = this.state.selectedMentee.peerId.slice();
    menteePeerIDCopy.push(mentor.id);
    //console.log(peerIdCopy)
    const currentMenteeWithoutID = (({ id, ...o }) => o)(
      this.state.selectedMentee
    );
    var menteeObj = { ...currentMenteeWithoutID, peerId: menteePeerIDCopy };
    try {
      // throw "Custom Error 1";
      await db
        .collection("users")
        .doc(this.state.selectedMentee.id)
        .set(menteeObj);
    } catch (error) {
      console.log(error);
      return;
    }
    var mentorPeerIDCopy = mentor.peerId.slice();
    mentorPeerIDCopy.push(this.state.selectedMentee.id);
    const currentMentorWithoutID = (({ id, ...o }) => o)(mentor);
    var mentorObj = { ...currentMentorWithoutID, peerId: mentorPeerIDCopy };
    try {
      await db.collection("users").doc(mentor.id).set(mentorObj);
      notify(
        menteeObj.fcmToken,
        "Mentor Assigned",
        `${mentorObj.name} is assigned to you as a mentor`
      );
      notify(
        mentorObj.fcmToken,
        "Mentee Assigned",
        `${menteeObj.name} is assigned to you as a mentee`
      );
    } catch (error) {
      await db
        .collection("users")
        .doc(this.state.selectedMentee.id)
        .set(currentMenteeWithoutID);
      console.log(error);
    }

    await this.getMenteeList();
    await this.getMentorList();
    this.setState({
      menteeProfileOpened: false,
      mentorQueryFired: false,
      mentorProfileOpened: false,
      filteredMentorList: [],
    });
  };

  openMenteeProfile = (item) => {
    //console.log(item)
    this.setState({ selectedMentee: item, menteeProfileOpened: true });
  };
  findMentors = (user) => {
    this.setState({ mentorQueryFired: true });
  };
  openMentorProfile = (item) => {
    //console.log(item)
    this.setState({ selectedMentor: item, mentorProfileOpened: true });
  };
  addFilters = (
    branchFilter,
    hostellerFilter,
    domainFilter,
    langFilter,
    zeroMenteeFilter
  ) => {
    console.log(
      "data recieved in parent page ",
      branchFilter,
      hostellerFilter,
      domainFilter,
      langFilter,
      zeroMenteeFilter
    );
    var filteredMentorList = this.state.mentorList;
    if (branchFilter != null) {
      console.log("filtering using branch");
      filteredMentorList = applyBranchFilter(filteredMentorList, branchFilter);
    }
    if (hostellerFilter) {
      console.log("list going in before hostel filter", filteredMentorList);
      filteredMentorList = applyHostellerFilter(filteredMentorList);
    }
    if (domainFilter != null) {
      console.log("list going in before domain filter", filteredMentorList);
      filteredMentorList = applyDomainsFilter(filteredMentorList, domainFilter);
    }
    if (langFilter != null) {
      console.log("list going in before lang filter", filteredMentorList);
      filteredMentorList = applyLanguagesFilter(filteredMentorList, langFilter);
    }
    if (zeroMenteeFilter) {
      console.log(
        "list going in before zero mentee filter",
        filteredMentorList
      );
      filteredMentorList = applyZeroMenteeFilter(filteredMentorList);
    }

    console.log("final filtered list ", filteredMentorList);
    this.setState({
      ...this.state,
      mentorQueryFired: true,
      filteredMentorList,
    });
  };

  render() {
    console.log(this.state);
    var menteeListDiv = this.state.menteeProfileOpened ? (
      <MenteeProfile
        addFilters={this.addFilters}
        user={this.state.selectedMentee}
      />
    ) : (
      <EmptyDiv />
    );
    var mentorMatchesDiv = this.state.mentorQueryFired ? (
      <MentorMatches
        mentorList={this.state.filteredMentorList}
        openMentorProfile={this.openMentorProfile}
      />
    ) : (
      <EmptyDiv />
    );
    var mentorProfileDiv = this.state.mentorProfileOpened ? (
      <MentorProfile
        user={this.state.selectedMentor}
        saveAssignment={this.saveAssignment}
      />
    ) : (
      <EmptyDiv />
    );
    return (
      <div className="assignmentDiv" style={{ width: "100%" }}>
        <MenteeList
          menteeList={this.state.menteeList}
          openMenteeProfile={this.openMenteeProfile}
        />
        {menteeListDiv}
        {mentorMatchesDiv}
        {mentorProfileDiv}
      </div>
    );
  }
}
