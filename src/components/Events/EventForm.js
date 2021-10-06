import React, { useState } from "react";
import "../../stylesheets/Event.css";

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    url: "",
    venue: "",
    time: "",
    link: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
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
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="Url"
          value={formData.url}
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
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
        />
        <textarea
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
