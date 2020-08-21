import React, { Component } from 'react';
import '../../stylesheets/home.css'
import Logo from '../../assets/images/Protege_logo.jpeg'
export default class Home extends Component {
  render() {
    return (
      <div className="jumbotron" style={{display:"flex"}}> 
          <div style={{display:"inline-block",padding:"45px"}}>
          <img src={Logo} style={{width:"250px",height:"250px"}} alt="protege logo" />
          </div>
          <div style={{display:"inline-block"}}>
          <p id="aboutUs" >
              
        During our first year in IGDTUW, we often felt intimidated 
        by our new surroundings, and found ourselves pondering upon
        questions like 
        <br />
        "Which society should I join?" 
        <br />
        "Which programming language to learn?" "Which books to refer?" 
        <br />
        "How to not miss-out on opportunities?" "HOW TO SURVIVE IGDTUW?"
        <br />
        Protégé aims to answer all these questions and more by 
        connecting students with their seniors who will mentor them
        in all aspects of college life!'
        </p>
        </div>
     </div>
    );
  }
}
