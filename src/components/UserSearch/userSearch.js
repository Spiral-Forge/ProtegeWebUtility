import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import "../../stylesheets/home.css";
import UserCard from "../Common/userCard";
import PeerCard from "../Common/peerCard";
const db = firebase.firestore();

export default function UserSearch() {
  const [searchedUserList, setSearchedUserList] = useState([]);
  const [searchedPeerList, setSearchedPeerList] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showUser(formData.name, formData.branch, formData.year);
  };

  const showUser = async (name, branch, year) => {
    db.collection("Users")
      .where("name", "==", name)
      .where("branch", "==", branch)
      .where("year", "==", year)
      .get()
      .then((querySnapshot) => {
        var mydata = querySnapshot.docs.map((a) => {
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        // console.log(mydata);
        setSearchedUserList(mydata);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="homeDiv">
      <div
        style={{
          backgroundColor: "#f3f3f3",
          display: "inline-block",
          textAlign: "center",
          padding: "100px",
        }}
        className="userForm"
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of student:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="branch">Branch:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="year">Year: (Enter First,Second,Third)</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
          <br />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "inline-block",
          textAlign: "center",
          padding: "20px",
        }}
        className="userList"
      >
        <ul style={{ display: "flex", gap: "20px" }}>
          {searchedUserList.map((user) => {
            return (
              <UserCard
                isHomeDisplay
                user={user}
                setSearchedPeerList={setSearchedPeerList}
              />
            );
          })}
          {searchedPeerList.map((user) => {
            return <PeerCard isHomeDisplay user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}
