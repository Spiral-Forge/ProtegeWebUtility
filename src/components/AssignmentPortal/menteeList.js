import React, { Component } from 'react';

export default class MenteeList extends Component {
  constructor(props){
    super(props)
    this.state={
      unassignedFlag:false,
      branchSelect:"None"
    }
  }
  render() {
    return (
        <div style={{backgroundColor:"#eeeeee",display:"inline-block",width:"25%"}}> 
        <input type="checkbox" id="Open" name="hosteller" value={true} onChange={this.handleCheckboxes}/>
        <label className="filterLabel"><p> Unassigned </p></label>
        <ul style={{padding:"0px",margin:"5px"}}>
       {this.props.menteeList.map((item, index) => (
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
