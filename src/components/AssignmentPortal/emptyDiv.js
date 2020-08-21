import React, { Component } from 'react';

export default class EmptyDiv extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#f3f3f3",display:"inline-block",minHeight:"100vh",width:"25%",wordWrap: "break-word"}}> 

        <p style={{marginTop:"50px"}}>Select an option from the list</p>
       </div>
    );
  }
}
