import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import "../../stylesheets/home.css";
import UserCard from "../Common/userCard";
import PeerCard from "../Common/peerCard";
import Card from "./card";
const db = firebase.firestore();

export default function UserSearch() {
  const [UserList, setUserList] = useState([]);
  const [searchedUserList, setSearchedUserList] = useState([]);
  const [searchedPeerList, setSearchedPeerList] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showUser(formData.name);
  };

  const showUser = async (name) => {
    db.collection("Users")
      .where("name", ">=", name)
      .where("name", "<=", name + "\uf8ff")

      .get()
      .then((list) => {
        var mydata = list.docs.map((a) => {
          const data = a.data();
          const id = a.id;
          return { id, ...data };
        });
        setUserList(mydata);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="homeDiv">
      <div className="userForm">
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

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        {UserList.map((user) => (
          <div
            onClick={() => {
              setSearchedUserList([user]);
              window.scrollTo(0, 0);
            }}
          >
            <Card user={user} />
          </div>
        ))}
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
