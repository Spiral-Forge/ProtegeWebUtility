import React, { Component } from 'react';
import firebase from "../Firebase/firebase";
import ResourceAdd from './resourceAdd'
import ResourceUpdateAndDelete from './resourceUpdateAndDelete'
const db = firebase.firestore();
export default class ResourcesPage extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedResourceList:[]
        }
    }
    getResourceList=async (domain)=>{
    // console.log("im printing")
        db.collection(domain).get()
        .then(querySnapshot => {
            var mydata= querySnapshot.docs.map(a => {
            const data = a.data();
            const id = a.id;
            return { id, ...data };
            });
            this.setState({selectedResourceList:mydata})
            });
    }
    deleteResource=async(domain,id)=>{
        await db.collection(domain).doc(id).delete();
        alert("deleted")
        this.getResourceList(domain)
    }
    addResource=async(domain,obj)=>{
        await db.collection(domain).add(obj)
        alert("added")
    }
    
  render() {
    return (
      <div> 
          <ResourceAdd resourceAdd={this.addResource}/>
          <ResourceUpdateAndDelete getResources={this.getResourceList} onDelete={this.deleteResource} resourceList={this.state.selectedResourceList}/>
          {/* <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"50%"}}> textInComponent </div> 
         <div style={{backgroundColor:"lightblue",display:"inline-block",height:"100vh",width:"50%"}}> div2 </div> */}
        </div>
    );
  }
}
