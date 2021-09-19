import React from "react";

export default function Card({ user }) {
  return (
    <div className="smallCard">
      <p>Name: {user.name}</p>
      <p>Branch: {user.branch}</p>
      <p>Year: {user.year}</p>
    </div>
  );
}
