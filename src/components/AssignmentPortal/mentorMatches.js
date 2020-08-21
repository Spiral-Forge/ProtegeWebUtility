import React, { Component } from 'react';

export default class MentorMatches extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#eeeeee",display:"inline-block",width:"25%"}}> 
         <ul style={{padding:"0px",margin:"5px"}}>
         {this.props.mentorList.map((item, index) => (
            <li style={{textDecoration: item.peerID==null || item.peerID.length==0 ?  'none': 'line-through'}} onClick={()=>this.props.openMentorProfile(item)}>
                <div class="list-group-item">
                  Name: {item.name}
                  <br />
                  Branch:{item.branch}
                </div>
            </li>
        ))}
        </ul>
         </div>
    );
  }
}
