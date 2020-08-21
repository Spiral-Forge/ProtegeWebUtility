import React, { Component } from 'react';
import MenteeList from './menteeList';
import MenteeProfile from './menteeProfile';
import MentorMatches from './mentorMatches';
import MentorProfile from './mentorProfile';
import EmptyDiv from './emptyDiv'
import firebase from "../Firebase/firebase";
import '../../stylesheets/assignment.css'
import {applyBranchFilter,applyHostellerFilter} from './filtering'
const db = firebase.firestore();
export default class AssignmentPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      menteeProfileOpened:false,
      mentorQueryFired:false,
      mentorProfileOpened:false,
      menteeList: [],
      mentorList:[],
      selectedMentee:{},
      selectedMentor:{}
    }
  }
  componentDidMount(){
    this.getMenteeList();
    this.getMentorList();
  }
  getMenteeList=async ()=>{
   // console.log("im printing")
    db.collection("Users").where('post', '==', "Mentee").get()
    .then(querySnapshot => {
      var mydata= querySnapshot.docs.map(a => {
        // console.log("a is ")
        // console.log(a)
        const data = a.data();
        const id = a.id;
        return { id, ...data };
      });
      this.setState({menteeList:mydata})
      });
    //return {}
    // fb.db.collection("users")
    // .orderByKey()
    // .get()
    // .then(querySnapshot => {
    //   const data = querySnapshot.docs.map(doc => doc.data());
    //   console.log(data); // array of cities objects
    // });
    //return {}
  }
  getMentorList=async ()=>{
    // console.log("im printing")
    db.collection("Users").where('post', '==', "Mentor").get()
    .then(querySnapshot => {
      var mydata= querySnapshot.docs.map(a => {
        // console.log("a is ")
        // console.log(a)
        const data = a.data();
        const id = a.id;
        return { id, ...data };
      });
      this.setState({mentorList:mydata})
      });
   }

   saveAssignment=async (mentor)=>{
     //console.log(mentor)
     //console.log(this.state.selectedMentee)
     //var currentMenteeWithoutID= 
      // console.log(mentor.id)
      // console.log(this.state.selectedMentee)
      var menteePeerIDCopy=this.state.selectedMentee.peerID.slice()
      menteePeerIDCopy.push(mentor.id)
      //console.log(peerIDCopy)
      const currentMenteeWithoutID = (({ id, ...o }) => o)(this.state.selectedMentee)
      var menteeObj={...currentMenteeWithoutID,peerID:menteePeerIDCopy}
      // console.log(objtobeset)
      await db.collection("Users").doc(this.state.selectedMentee.id)
      .set(menteeObj);
      var mentorPeerIDCopy=mentor.peerID.slice()
      mentorPeerIDCopy.push(this.state.selectedMentee.id)
      const currentMentorWithoutID = (({ id, ...o }) => o)(mentor)
      var mentorObj={...currentMentorWithoutID,peerID:mentorPeerIDCopy}
      //console.log(mentor)
      await db.collection("Users").doc(mentor.id)
      .set(mentorObj);
      await this.getMenteeList()
      await this.getMentorList()
      this.setState({
        menteeProfileOpened:false,
        mentorQueryFired:false,
        mentorProfileOpened:false,
      })

   }

  openMenteeProfile=(item)=>{
    //console.log(item)
    this.setState({selectedMentee:item,menteeProfileOpened:true})
  }
  findMentors=(user)=>{
    this.setState({mentorQueryFired:true})
  }
  openMentorProfile=(item)=>{
    //console.log(item)
    this.setState({selectedMentor:item,mentorProfileOpened:true})
  }
  addFilters=(branchFilter,hostellerFilter,domainFilter,langFilter,zeroMenteeFilter)=>{
    console.log("data recieved in parent page ",branchFilter,hostellerFilter,domainFilter,langFilter,zeroMenteeFilter)
    var filteredMentorList=this.state.mentorList
    if(branchFilter!=null){
      console.log("filtering using branch")
      filteredMentorList=applyBranchFilter(filteredMentorList,branchFilter)
    }
    if(hostellerFilter){
      console.log("list going in ",filteredMentorList)
      filteredMentorList=applyHostellerFilter(filteredMentorList)
    }
    console.log(filteredMentorList)
  }
    
  render() {
    console.log(this.state)
    var menteeListDiv= this.state.menteeProfileOpened ?    <MenteeProfile addFilters={this.addFilters} findMentors={this.findMentors} user={this.state.selectedMentee}/>  : <EmptyDiv/>;
    var mentorMatchesDiv= this.state.mentorQueryFired ?    <MentorMatches mentorList={this.state.mentorList} openMentorProfile={this.openMentorProfile}/>  : <EmptyDiv/>;
    var mentorProfileDiv= this.state.mentorProfileOpened ?    <MentorProfile user={this.state.selectedMentor} saveAssignment={this.saveAssignment}/>  : <EmptyDiv/>;
    return (
        <div className="assignmentDiv" style={{width:"100%"}}>
            <MenteeList menteeList={this.state.menteeList} openMenteeProfile={this.openMenteeProfile}/>
            {menteeListDiv}
            {mentorMatchesDiv}
            {mentorProfileDiv}
      
      </div>
    );
  }
}
