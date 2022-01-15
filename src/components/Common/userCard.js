import React, { Component } from "react";
import firebase from "../Firebase/firebase";
const db = firebase.firestore();

export default function UserCard({
  user,
  isHomeDisplay,
  setSearchedUserList,
  setSearchedPeerList,
}) {
  const viewPeer = async (id) => {
    const res = await peerData(id);
    console.log(res);
    setSearchedPeerList([res]);
  };

  const peerData = async (id) => {
    var snap = await db
      .collection("users")
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get();
    const peer = snap.docs.map((a) => {
      const data = a.data();
      return { ...data };
    });
    return peer[0];
  };

  const removePeer = async (id) => {
    const peer = await peerData(id);
    const uIdx = user.peerID.indexOf(id);
    const pIdx = peer.peerID.indexOf(user.id);

    const pId = user.peerID.splice(uIdx, 1)[0];
    const uId = peer.peerID.splice(pIdx, 1)[0];

    delete user.id;

    await db.collection("users").doc(uId).update(user);
    await db.collection("users").doc(pId).update(peer);


    const res = await peerData(uId);
    setSearchedUserList([res]);
    setSearchedPeerList([]);
  };

  return (
    <div id="marginHandler" className="card" style={{ width: "18rem" }}>
      <div className="card-header">{user.name}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Year: {user.year}</li>
        <li className="list-group-item">Branch: {user.branch}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Github: {user.githubURL}</li>
        <li className="list-group-item">LinkedIn: {user.linkedInURL}</li>
        <li className="list-group-item">Contact: {user.contact}</li>
        <li className="list-group-item">Hosteller: {user.hosteller}</li>
        <li className="list-group-item">
          Domains:{" "}
          {user.domains.map((domain) => {
            return domain + ", ";
          })}
        </li>
        <li className="list-group-item">
          Languages:{" "}
          {user.languages.map((lang) => {
            return lang + ", ";
          })}
        </li>
        {isHomeDisplay ? (
          <div>
            <li className="list-group-item">Post: {user.post}</li>
            <li className="list-group-item">
              PeerID:{" "}
              {user.peerID &&
                user.peerID.map((id) => (
                  <div style={{ marginBottom: "10px" }}>
                    <p style={{ marginBottom: "5px" }}>{id}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        justifyContent: "center",
                      }}
                    >
                      <button onClick={() => removePeer(id)}>
                        Remove Peer
                      </button>
                      <button onClick={() => viewPeer(id)}>View Peer</button>
                    </div>
                  </div>
                ))}
            </li>
          </div>
        ) : null}
      </ul>
    </div>
  );
}
