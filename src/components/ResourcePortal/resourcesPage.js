import React, { Component } from 'react';
import firebase from "../Firebase/firebase";
import ResourceAdd from './resourceAdd'
import ResourceUpdateAndDelete from './resourceUpdateAndDelete'
import '../../stylesheets/resources.css'
const db = firebase.firestore();


let idmap = {
  'Competitive Coding': 'CnqgrckX3Ng9LkYatEuO',
  'College': 'ERJWeTgvy9jZnaywAEyk',
  'Scholarships': 'g1kD27iQbspFYKFGZZD1',
  'Development' : 'p1X297pOuY3qRVimM8vO',
  'Open Source': 'gXZ6cG9cVn4GliuyVrMc',
  'Blogs and Articles': 'tK0pHlzBEeGpt8E2nlmd',
  'Machine Learning' : 'tzBwYg8l6Rfk6gBHdOgA',
  'Miscellaneous': 'eY2GbIcMptOcCSM5kG58'
}

export default class ResourcesPage extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedResourceList:[]
        }
    }
    getResourceList=async (domain)=>{
    // console.log("im printing")

        await db.collection("resources01").doc(idmap[domain]).collection('data').get().then(querySnapshot => {
            var mydata= querySnapshot.docs.map(a => {
                const title = a.data().title;
                const link = a.data().link;
                const votes = a.data().votes;
                const votesMap = a.data().votesMap;
                const id = a.id;
                return { id, title, link, votes, votesMap };
            });
            console.log(mydata);
            this.setState({selectedResourceList:mydata})
        })
    }
    deleteResource=async(domain,id)=>{

        await db.collection("resources01").doc(idmap[domain]).collection('data').doc(id).delete();
        // await db.collection(domain).doc(id).delete();
        alert("deleted")
        this.getResourceList(domain)
    }

    addResource=async(domain,obj)=>{

        await db.collection("resources01").doc(idmap[domain]).collection('data').add(obj);
        alert("added")
    }
    
  render() {
    return (
      <div className="resourcesDiv"> 
          <ResourceAdd resourceAdd={this.addResource}/>
          <ResourceUpdateAndDelete getResources={this.getResourceList} onDelete={this.deleteResource} resourceList={this.state.selectedResourceList}/>
          {/* <div style={{backgroundColor:"grey",display:"inline-block",height:"100vh",width:"50%"}}> textInComponent </div> 
         <div style={{backgroundColor:"lightblue",display:"inline-block",height:"100vh",width:"50%"}}> div2 </div> */}
        </div>
    );
  }
}
