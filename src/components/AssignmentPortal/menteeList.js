import React, { Component } from 'react';
import {applyZeroMenteeFilter, applyBranchFilter} from './filtering'

export default class MenteeList extends Component {
  constructor(props){
    super(props)
    this.state={
      unassignedFlag:false,
      branchSelect:"None",
      filteredList:this.props.menteeList
    }
  }
  componentWillReceiveProps(){
    this.setState({filteredList:this.props.menteeList})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    var filteredArr=this.props.menteeList
    console.log("arr before any filtering",filteredArr)
    if(this.state.unassignedFlag){
      filteredArr=applyZeroMenteeFilter(filteredArr)
    }
    if(this.state.branchSelect!="None"){
      filteredArr=applyBranchFilter(filteredArr,this.state.branchSelect)
    }
    console.log("array after filtering",filteredArr)
    this.setState({filteredList:filteredArr})
  }

  handleCheckboxes=(e)=>{
    if(e.target.checked){
      this.setState({[e.target.name]:true})
    }else{
      this.setState({[e.target.name]:false})
    }
  }
  handleChange=(e)=> {
    this.setState({[e.target.name]:e.target.value})
  }
  
  render() {
    console.log(this.props.menteeList)
    return (
        <div style={{backgroundColor:"#eeeeee",display:"inline-block",width:"25%"}}> 
        <form onSubmit={this.handleSubmit}>
        <p className="filterLabel">FILTERS:</p>
        <label className="filterLabel">
            Select branch: 
            <select name="branchSelect" value={this.state.branchSelect} onChange={this.handleChange}>
              <option value="None">None</option>
              <option value="CSE-1">CSE-1</option>
              <option value="CSE-2">CSE-2</option>
              <option value="IT-1">IT-1</option>
              <option value="IT-2">IT-2</option>
              <option value="ECE">ECE</option>
              <option value="MAE">MAE</option>
              <option value="BBA">BBA</option>
              <option value="B.Arch">B.Arch</option>
            </select>
          </label>
          <br />
        <input type="checkbox" id="Open" name="unassignedFlag" value={true} onChange={this.handleCheckboxes}/>
        <label className="filterLabel"><p> Unassigned </p></label>
        <br />
        <input class="btn btn-primary" type="submit" value="Submit"/>
        </form>
        <hr></hr>
        <ul style={{padding:"0px",margin:"5px"}}>
       {this.state.filteredList.map((item, index) => (
            <li onClick={()=>this.props.openMenteeProfile(item)}>
                <div class="list-group-item">
                  Name: {item.name}
                  <br />
                  Branch:{item.branch}
                  <br />
                  No of mentors: {item.peerID ? item.peerID.length : "dunno"}
                </div>
            </li>
        ))}
        </ul>
         </div>
    );
  }
}
