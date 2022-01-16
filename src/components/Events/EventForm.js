import React, { useState, useEffect } from "react";
import "../../stylesheets/Event.css";
import { createEvent, updateEvent } from "./util";
import DateTimePicker from 'react-datetime-picker';

const emptyForm = {
  name: "",
  dateTime: "",
  imageUrl: "",
  venue: "",
  description: "",
  registrationLink: ""
};

export default function EventForm({ getEvent, edit, setEdit }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (!!edit) {
      setFormData(edit);
    }
  }, [edit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    console.log("form data now is", e, formData)
    setFormData({
      ...formData,
      dateTime: new Date(e),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!!edit) {
      updateEvent(formData);
      setEdit();
    } else {
      createEvent(formData);
    }
    setFormData(emptyForm);
    getEvent();
  };

  return (
    <div className="event--form">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <DateTimePicker
          name="dateTime"
          onChange={handleDateChange}
          value={formData.dateTime}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
        />
        <input
          type="text"
          name="registrationLink"
          placeholder="Link"
          value={formData.registrationLink}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <div className="submit">
          {!!edit && (
            <button
              onClick={() => {
                setEdit();
                setFormData(emptyForm);
              }}
            >
              Cancel
            </button>
          )}
          <button>{!edit ? "Create Event" : "Update Event"}</button>
        </div>
      </form>
    </div>
  );
}
