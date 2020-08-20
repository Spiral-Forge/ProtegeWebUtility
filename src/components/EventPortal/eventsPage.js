import React, { Component } from 'react';
import EventForm from './eventForm'
import firebase from "../Firebase/firebase";
import Events from './events'
import DeleteUpdateSection from './deleteUpdateSection'
import '../../stylesheets/events.css'
const db = firebase.firestore();
export default class EventsPage extends Component {

    constructor(props){
        super(props)
        this.state={
            eventList:[],
            eventForUpdate:{},
        }
    }
    componentDidMount(){
        this.getEventList();
    }

getEventList=async ()=>{
    // console.log("im printing")
    db.collection("Events").get()
    .then(querySnapshot => {
        var mydata= querySnapshot.docs.map(a => {
        const data = a.data();
        const id = a.id;
        return { id, ...data };
        });
        this.setState({eventList:mydata})
        });
    }

    saveEvent=async(eventObj) =>{
        //console.log("coming here with obj",eventObj)
        await db.collection("Events").add(eventObj)
        alert("congratulations event has been saved")
        this.getEventList()
    }
    updateEvent=async(eventObj,id) =>{
        //console.log("coming here with obj",eventObj)
        await db.collection("Events").doc(id).set(eventObj)
        alert("congratulations event has been saved")
        this.getEventList()
    }
    deleteEvent=async(eventName) =>{
        //console.log("coming here with obj",eventObj)
        var newlist=this.state.eventList.filter(event=>event.name==eventName)
        //console.log("new list is ",newlist)
        await db.collection("Events").doc(newlist[0].id).delete();
        alert("congratulations event has been deleted")
        this.getEventList()
    }
    getEvent=async(eventName)=>{
        await db.collection("Events").where("name","==",eventName).get()
        .then(querySnapshot => {
            var mydata= querySnapshot.docs.map(a => {
            const data = a.data();
            const id = a.id;
            return { id, ...data };
        })
        this.setState({eventForUpdate:mydata[0]})
        console.log("my data is ",mydata)
        });
    }

  render() {
    return (
        
        <div className="eventDiv" style={{width:"100%"}}>
            <Events eventList={this.state.eventList}/>
        {/* <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"33.33%"}}> textInComponent </div> */}
        {/* <div style={{backgroundColor:"lightblue",display:"inline-block",height:"100vh",width:"33.33%"}}> div2 </div> */}
            <EventForm saveEvent={this.saveEvent}/>
            <DeleteUpdateSection updateEvent={this.updateEvent} getEvent={this.getEvent} deleteEvent={this.deleteEvent} eventToUpdate={this.state.eventForUpdate}/>
            {/* <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"33.33%"}}> textsasInComponent </div> */}
        </div>
    );
  }
}
