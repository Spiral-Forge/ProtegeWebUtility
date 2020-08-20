import React, { Component } from 'react';

export default class MentorMatches extends Component {
  render() {
    return (
        <div style={{backgroundColor:"grey",display:"inline-block",width:"25%"}}> 
         {this.props.mentorList.map((item, index) => (
            <li onClick={()=>this.props.openMentorProfile(item)}>{item.name}</li>
        ))}
         </div>
    );
  }
}
