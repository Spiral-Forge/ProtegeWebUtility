import React, { Component } from 'react';

export default class MenteeList extends Component {
  render() {
    return (
        <div style={{backgroundColor:"grey",display:"inline-block",minHeight:"100vh",width:"25%"}}> 
       {this.props.menteeList.map((item, index) => (
            <li style={{textDecoration: item.peerID==null || item.peerID.length==0 ?  'none': 'line-through'}} onClick={()=>this.props.openMenteeProfile(item)}>{item.name}</li>
        ))}
         </div>
    );
  }
}
