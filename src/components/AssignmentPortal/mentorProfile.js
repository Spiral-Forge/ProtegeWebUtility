import React, { Component } from 'react';
import UserCard from '../Common/userCard'

export default class MentorProfile extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#f3f3f3",display:"inline-block",width:"25%",padding: "10px"}}> 
            <UserCard user={this.props.user} />
            <button onClick={()=>this.props.saveAssignment(this.props.user)}>Assign</button>
         </div>
    );
  }
}
