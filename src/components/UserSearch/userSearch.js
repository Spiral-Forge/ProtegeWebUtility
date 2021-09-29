import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import "../../stylesheets/home.css";
import UserCard from "../Common/userCard";
import PeerCard from "../Common/peerCard";
import Card from "./card";
import {
  searchByName,
  searchByEmail,
  searchByPhone,
  searchByNameAndEmail,
  searchByNameAndPhone,
  searchByEmailAndPhone,
  searchByNameAndEmailAndPhone,
} from "./search";

const db = firebase.firestore();

export default function UserSearch() {
  const [userList, setUserList] = useState([]);
  const [searchedUserList, setSearchedUserList] = useState([]);
  const [searchedPeerList, setSearchedPeerList] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserList([]);

    if (!!name && !!email && !!phone) {
      const res = await searchByNameAndEmailAndPhone(name, email, phone);
      setUserList(res);
    } else if (!!name && !!email) {
      const res = await searchByNameAndEmail(name, email);
      setUserList(res);
    } else if (!!name && !!phone) {
      const res = await searchByNameAndPhone(name, phone);
      setUserList(res);
    } else if (!!phone && !!email) {
      const res = await searchByEmailAndPhone(email, phone);
      setUserList(res);
    } else if (!!name) {
      const res = await searchByName(name);
      setUserList(res);
    } else if (!!email) {
      const res = await searchByEmail(email);
      setUserList(res);
    } else if (!!phone) {
      const res = await searchByPhone(phone);
      setUserList(res);
    }
  };

  // setUserList(mydata);

  return (
    <div className="homeDiv">
      <div className="userForm">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Name</label> */}
          <br />
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          {/* <label htmlFor="email">Email</label> */}
          {/* <br /> */}
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {/* <label htmlFor="phone">Phone</label> */}
          {/* <br /> */}

          <input
            className="form-control"
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            maxLength="10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        {userList.map((user) => (
          <div
            onClick={() => {
              setSearchedUserList([user]);
              setSearchedPeerList([]);
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
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
        >
          {searchedUserList.map((user) => {
            return (
              <UserCard
                isHomeDisplay
                user={user}
                searchedUserList={searchedUserList}
                setSearchedUserList={setSearchedUserList}
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
