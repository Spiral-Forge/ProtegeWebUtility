import React, { Component } from 'react';
import firebase from "../Firebase/firebase";
import '../../stylesheets/home.css'
import UserCard from '../Common/userCard';
const db = firebase.firestore();

export default class UserSearch extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            branch:'',
            year:'',
            searchedUserList:[]
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.showUser(this.state.name,this.state.branch,this.state.year)
        this.setState({
        name:'',
        branch:'',
        year:'',
        })
    }
    showUser=async (name,branch,year)=>{
        var userRef= db.collection("Users")
        .where("name","==",name)
        .where("branch","==",branch)
        .where("year","==",year)
        .get()
        .then(querySnapshot => {
            var mydata= querySnapshot.docs.map(a => {
            const data = a.data();
            const id = a.id;
            return { id, ...data };
            });
            console.log(mydata)
            this.setState({searchedUserList:mydata})
        });


    }
    

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div className="homeDiv"> 
          <div style={{backgroundColor:"#f3f3f3",display:"inline-block",textAlign:"center",padding:"100px"}} className="userForm">
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name of student:</label><br />
            <input class="form-control" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/><br />
            <label htmlFor="branch">Branch:</label><br />
            <input class="form-control" type="text" id="branch" name="branch" value={this.state.branch} onChange={this.handleChange}/><br />
            <label htmlFor="year">Year: (Enter First,Second,Third)</label><br />
            <input class="form-control" type="text" id="year" name="year" value={this.state.year} onChange={this.handleChange}/><br /><br />
            <input class="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
        <div style={{backgroundColor:"#eeeeee",display:"inline-block",textAlign:"center",padding:"20px"}} className="userList">
            <ul>
                {this.state.searchedUserList.map(user=>{
                    return <UserCard isHomeDisplay user={user} />
                })}
            </ul>
        </div>
      </div>
    );
  }
}
