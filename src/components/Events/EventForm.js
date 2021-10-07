import React, { useState, useEffect } from "react";
import "../../stylesheets/Event.css";
import { createEvent, updateEvent } from "./util";

const emptyForm = {
  name: "",
  date: "",
  url: "",
  venue: "",
  time: "",
  link: "",
  description: "",
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
          required
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="url"
          placeholder="Url"
          value={formData.url}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
        />
        <textarea
          required
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
