import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import EventForm from "./EventForm";
import Dropdown from "react-dropdown";
import "../../stylesheets/Event.css";
import { getAllEvent, getApprovedEvent, getUnapprovedEvent } from "./util";

const evtOp = ["All", "Approved", "Unapproved"];

export default function Event() {
  const [evt, setEvt] = useState({ label: "All", value: "All" });
  const [events, setEvents] = useState([]);
  const [edit, setEdit] = useState();

  useEffect(() => {
    getEvent();
  }, [evt]);

  const getEvent = async () => {
    let res = [];
    if (evt.value == "All") {
      res = await getAllEvent();
    }
    if (evt.value == "Approved") {
      res = await getApprovedEvent();
    }
    if (evt.value == "Unapproved") {
      res = await getUnapprovedEvent();
    }
    console.log(res);
    setEvents(res);
  };

  return (
    <div className="event--container">
      <div className="event--content">
        <div className="left">
          <div className="event--filter">
            <Dropdown options={evtOp} onChange={setEvt} value={evt} />
            <h2>Events</h2>
          </div>
          <div className="event--cards">
            {!!events.length ? (
              events.map((event) => (
                <EventCard
                  event={event}
                  getEvent={getEvent}
                  setEdit={setEdit}
                />
              ))
            ) : (
              <h3>Nothing to display</h3>
            )}
          </div>
        </div>
        <div className="right">
          <EventForm getEvent={getEvent} edit={edit} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
}
