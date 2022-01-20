import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand">
        <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <div className="navRight">Protege-Online Portal</div> 
            <ul className="nav navbar-nav navbar-right">
                <li><Link to ="/login">Login / Logout</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/usersearch">Search user</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/assignment">Assignment</Link></li>
                
            </ul>
        </div>
    </nav>
);
}


// 

export default Navbar;