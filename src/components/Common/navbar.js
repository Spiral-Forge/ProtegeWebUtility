import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="navbar-header">
                </div>
                <div className="navRight">Protege-Online Portal</div> 
                    {/* <ul className="nav navbar-nav navbar-right signedinNav">
                        <li>
                        <div style={{display:"inline-block"}}>
                                <img style={{height:"70px",width:"70px",borderRadius:"50%"}} src={getItem("profilePic") || defaultIMG} />
                            </div>
                        </li>
                        <li>
                        <div>
                            <div style={{display:"inline-block",width:"0.5vw"}}></div>
                            <div style={{display:"inline-block",marginRight:"15px"}}>
                                <div>Signed in as:</div>
                                <div>{getItem("name")}</div>
                                <div>{getItem("email")}</div>
                            </div>
                            
                        </div>
                        </li>
                        <li><a onClick={this.handleSignout}>Logout</a></li>
                    </ul> */}
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/assignment">Assignment</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    );
  }
}
