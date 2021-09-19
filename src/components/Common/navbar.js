import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { useHistory } from "react-router-dom"

export default class Navbar extends Component {
  // const { logout, currentuser } = useAuth();

  // const logoutHandler = async () => {
  //     await logout();
  //     history.push("/");
  //     console.log("Logout Fail");
  // }

  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header"></div>
          <div className="navRight">Protege-Online Portal</div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usersearch">Search user</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/assignment">Assignment</Link>
            </li>
            {/* <li onClick={logoutHandler}>Logout</li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
