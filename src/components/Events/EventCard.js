import React from "react";
import "../../stylesheets/Event.css";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoCheck } from "react-icons/go";
import { deleteEvent, approveEvent } from "./util";

export default function EventCard({ event, getEvent, setEdit }) {
  const handleDelete = () => {
    deleteEvent(event.id);
    getEvent();
  };

  const getFormattedDate = (date) => {
    return date.toDate().toDateString()
  }

  const getFormattedTime = (date) => {
    return date.toDate().toLocaleTimeString('en-US',{timeZone:'IST',hour12:true,hour:'numeric',minute:'numeric'})
  }

  return (
    <div className="event--card">
      <div className="img">
        <img src={event.imageUrl} alt="" />
        <div className="icons">
          <span onClick={() => setEdit(event)}>
            <BsPencil className="icon" />
          </span>
          <span onClick={handleDelete}>
            <RiDeleteBin5Line className="icon" />
          </span>
          {!event.approved && (
            <span
              onClick={() => {
                approveEvent(event);
                getEvent();
              }}
            >
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
              When: {getFormattedDate(event.dateTime)} | At: {getFormattedTime(event.dateTime)}
            </p>
            <p>
              Where: {event.venue}
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
