import React, { useState } from "react";
import firebase from "../Firebase/firebase";
const db = firebase.firestore();

// import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function UserCard({
  user,
  isHomeDisplay,
  setSearchedUserList,
  setSearchedPeerList,
  setEdit,
}) {
  const [error, setError] = useState("");

  const viewPeer = async (id) => {
    setError("");
    const res = await peerData(id);
    if (!res) {
      setError("this user does not exist");
      return;
    }

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

  const removePeerId = async (id) => {
    const uIdx = user.peerID.indexOf(id);
    const pId = user.peerID.splice(uIdx, 1)[0];
    const uId = user.id;
    delete user.id;
    console.log(user);
    await db.collection("users").doc(uId).update(user);
    const res = await peerData(uId);
    setSearchedUserList([res]);
  };

  const removePeer = async (id) => {
    const peer = await peerData(id);
    if (!peer) {
      removePeerId(id);
      return;
    }
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

  const resetPass = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(user.email)
      .then(() => {
        console.log("yoyoyo");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div id="marginHandler" className="card" style={{ width: "18rem" }}>
      <div className="card-header">{user.name}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Year: {user.year}</li>
        <li className="list-group-item">Branch: {user.branch}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Github: {user.githubUrl}</li>
        <li className="list-group-item">LinkedIn: {user.linkedInUrl}</li>
        <li className="list-group-item">Contact: {user.phoneNo}</li>
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
                      <div className="cta-btns">
                        <button onClick={() => removePeer(id)}>
                          Remove Peer
                        </button>
                        <button onClick={() => viewPeer(id)}>View Peer</button>
                      </div>
                    </div>
                  </div>
                ))}
              {error && (
                <p style={{ backgroundColor: "#ff00002e", padding: 5 }}>
                  {error}
                </p>
              )}
              <div style={{ marginTop: 20 }} className="cta-btns">
                <button onClick={resetPass}>Reset Password</button>
                <button onClick={() => setEdit(true)}>Edit Details</button>
              </div>
            </li>
          </div>
        ) : null}
      </ul>
    </div>
  );
}
