import React, { Component } from 'react';
import firebase from "../Firebase/firebase";
const db = firebase.firestore();

export default class HomePage extends Component {
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
      <div> 
          <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Title:</label><br />
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/><br />
        <label htmlFor="branch">Branch:</label><br />
        <input type="text" id="branch" name="branch" value={this.state.branch} onChange={this.handleChange}/><br />
        <label htmlFor="year">Year: (Enter First,Second,Third)</label><br />
        <input type="text" id="year" name="year" value={this.state.year} onChange={this.handleChange}/><br />
        <input type="submit" value="Submit"/>
        </form>
        <div>
            <ul>
                {this.state.searchedUserList.map(user=>{
                    return <li>
                        <p>{user.name}</p>
                        <p>{user.branch}</p>
                        <p>{user.year}</p>
                    </li>
                })}
            </ul>
        </div>
      </div>
    );
  }
}
