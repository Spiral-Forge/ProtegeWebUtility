import React from "react";
import "../../stylesheets/Event.css";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoCheck } from "react-icons/go";

export default function EventCard({ event }) {
  return (
    <div className="event--card">
      <div className="img">
        <img src={event.url} alt="" />
        <div className="icons">
          <span>
            <BsPencil className="icon" />
          </span>
          <span>
            <RiDeleteBin5Line className="icon" />
          </span>
          {!event.approved && (
            <span>
              <GoCheck className="icon" />
            </span>
          )}
        </div>
      </div>
      <div className="info">
        <div className="head">
          <p>{event.name}</p>
          <span className="more">
            <p>
              {event.date} | {event.venue}
            </p>
          </span>
        </div>
        <div className="desc">
          <p>{event.description.slice(0, 250)}...</p>
        </div>
      </div>
    </div>
  );
}
