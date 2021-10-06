import React, { useState } from "react";
import "../../stylesheets/Event.css";
import { createEvent } from "./util";

const emptyForm = {
  name: "",
  date: "",
  url: "",
  venue: "",
  time: "",
  link: "",
  description: "",
};

export default function EventForm({ getEvent }) {
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createEvent(formData);
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
          value={formData.desc}
          onChange={handleChange}
        />

        <div className="submit">
          <button>Create Event</button>
        </div>
      </form>
    </div>
  );
}
