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
    // console.log("im printing")
    await db
      .collection("Users")
      .where("post", "==", "Mentee")
      .get()
      .then(async (querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          // console.log("a is ")
          // console.log(a)
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        var mydata2 = mydata.filter((mentee) => {
          console.log(
            "true of false?",
            mentee.cohort != null && mentee.cohort == "January 2021"
          );
          return mentee.cohort != null && mentee.cohort == "January 2021";
        });
        console.log("data after filtering", mydata2);
        this.setState({ menteeList: mydata2 });
      });

    // for(var i=0;i<mydata.length;i++){
    //   //console.log(mydata[i].peerID[0])
    //   if(mydata[i].peerID[0]){
    //   //await db.collection("Users").doc(mydata[i].peerID[0]).get()
    //   await db.collection('Users').doc(mydata[i].peerID[0]).get()
    //   .then(snapshot => {

    //     console.log("mentee "+mydata[i].name+" "+mydata[i].languages+" - "+"mentor "+snapshot.data().name+" "+snapshot.data().languages)
    //   })
    // }
    //   // var final=await objs.get();
    //   // console.log("objs",final)
    // }
    // this.setState({menteeList:mydata})
    //return {}
    // fb.db.collection("users")
    // .orderByKey()
    // .get()
    // .then(querySnapshot => {
    //   const data = querySnapshot.docs.map(doc => doc.data());
    //   console.log(data); // array of cities objects
    // });
    //return {}
    //});
  };

  addCohort = async () => {
    var querySnapshot = await db
      .collection("Users")
      .where("contact", "in", [
        "9868279694",
        "8800316138",
        "8700921396",
        "9650244409",
        "9643286358",
        "9560254232",
        "9267998718",
        "8447070650",
        "8882399925",
        "8882399570",
      ])
      .get();
    console.log("data peeps", querySnapshot.docs.length);
    for (var i = 0; i < querySnapshot.docs.length; i++) {
      await db
        .collection("Users")
        .doc(querySnapshot.docs[i].id)
        .update({ cohort: "January 2021" });
    }

    console.log("DONEEE 1");

    querySnapshot = await db
      .collection("Users")
      .where("contact", "in", [
        "9582181906",
        "9953571891",
        "9034471692",
        "9810519877",
        "9971073352",
        "8882627087",
        "8882250446",
        "9911861676",
        "9205642321",
        "9560523933",
      ])
      .get();
    console.log("data peeps", querySnapshot.docs.length);
    for (var i = 0; i < querySnapshot.docs.length; i++) {
      //console.log("yoyo",querySnapshot.docs[i].id)
      await db
        .collection("Users")
        .doc(querySnapshot.docs[i].id)
        .update({ cohort: "January 2021" });
    }
    console.log("done 2");

    querySnapshot = await db
      .collection("Users")
      .where("contact", "in", [
        "9149345729",
        "8700556386",
        "8920130926",
        "7906771458",
        "9810210801",
        "8851618045",
        "8376888524",
      ])
      .get();
    console.log("data peeps", querySnapshot.docs.length);
    for (var i = 0; i < querySnapshot.docs.length; i++) {
      //console.log("yoyo",querySnapshot.docs[i].id)
      await db
        .collection("Users")
        .doc(querySnapshot.docs[i].id)
        .update({ cohort: "January 2021" });
    }
    console.log("check now");
  };

  getMentorList = async () => {
    // console.log("im printing")
    await db
      .collection("Users")
      .where("post", "==", "Mentor")
      .get()
      .then((querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          // console.log("a is ")
          // console.log(a)
          console.log(mydata);
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        var mydata2 = mydata.filter((mentee) => {
          console.log(
            "true of false?",
            mentee.cohort != null && mentee.cohort == "January 2021"
          );
          return mentee.cohort != null && mentee.cohort == "January 2021";
        });
        console.log("mentor data", mydata2);
        this.setState({ mentorList: mydata2 });
      });
  };

  saveAssignment = async (mentor) => {
    //console.log(mentor)
    //console.log(this.state.selectedMentee)
    //var currentMenteeWithoutID=
    // console.log(mentor.id)
    // console.log(this.state.selectedMentee)
    var menteePeerIDCopy = this.state.selectedMentee.peerID.slice();
    menteePeerIDCopy.push(mentor.id);
    //console.log(peerIDCopy)
    const currentMenteeWithoutID = (({ id, ...o }) => o)(
      this.state.selectedMentee
    );
    var menteeObj = { ...currentMenteeWithoutID, peerID: menteePeerIDCopy };
    // console.log(objtobeset)
    await db
      .collection("Users")
      .doc(this.state.selectedMentee.id)
      .set(menteeObj);
    var mentorPeerIDCopy = mentor.peerID.slice();
    mentorPeerIDCopy.push(this.state.selectedMentee.id);
    const currentMentorWithoutID = (({ id, ...o }) => o)(mentor);
    var mentorObj = { ...currentMentorWithoutID, peerID: mentorPeerIDCopy };
    //console.log(mentor)
    await db.collection("Users").doc(mentor.id).set(mentorObj);
    await this.getMenteeList();
    await this.getMentorList();
    this.setState({
      menteeProfileOpened: false,
      mentorQueryFired: false,
      mentorProfileOpened: false,
      filteredMentorList: [],
    });

    notify(
      menteeObj.token,
      "Mentor Assigned",
      `${mentorObj.name} is assigned to you as a mentor`
    );
    notify(
      mentorObj.token,
      "Mentee Assigned",
      `${menteeObj.name} is assigned to you as a mentee`
    );
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
        {/* <button onClick={this.addCohort}>ADD COHORT</button> */}
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
