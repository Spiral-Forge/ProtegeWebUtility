import React, { Component } from 'react';

export default class MentorProfile extends Component {
  render() {
    return (
        <div style={{backgroundColor:"lightblue",display:"inline-block",height:"100vh",width:"25%"}}> 
         <ul>
                <li>{this.props.user.name}</li>
                <li>{this.props.user.contact}</li>
                <li>{this.props.user.branch}</li>
                <li>{this.props.user.year}</li>
                <li>{this.props.user.domains}</li>
            </ul>
            <button>Assign</button>
         </div>
    );
  }
}
