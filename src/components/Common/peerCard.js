import React, { Component } from "react";

export default function PeerCard({ user, isHomeDisplay }) {
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
        {/* <li className="list-group-item">
          Languages:{" "}
          {user.languages.map((lang) => {
            return lang + ", ";
          })}
        </li> */}
        {isHomeDisplay ? (
          <div>
            <li className="list-group-item">Post: {user.post}</li>
            <li className="list-group-item">
              PeerID:{" "}
              {user.peerID &&
                user.peerID.map((id) => (
                  <div style={{ marginBottom: "10px" }}>
                    <p style={{ marginBottom: "5px" }}>{id}</p>
                  </div>
                ))}
            </li>
          </div>
        ) : null}
      </ul>
    </div>
  );
}
