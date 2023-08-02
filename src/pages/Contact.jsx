import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Contact() {
        const [input, setInput] = useState({
          name: "",
          email: "",
          message: "",
        });

        const handleClick = (e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
        };
    const submitEvent = async (e) => {
      e.preventDefault();
      const a = await fetch("http://127.0.0.1:8080/comment/create", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(input),
      })
        .then((a) => a.json())
        .then((a) => a);
    };
  return (
    <>
      <div className="basket-image">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          alt=""
        />
        <div className="links">
          <NavLink end to="/">
            Home
          </NavLink>{" "}
          / Elaqe
          <div className="text">
            <h1>əlaqe</h1>
            <h2>Bizə ulaşmaq üçün aşağıda mesaj göndərə bilərsiz.</h2>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={submitEvent}>
          <label>Name:</label>
          <input
            name="name"
            value={input.name}
            onChange={handleClick}
            type="text"
          />
          <label>Email:</label>
          <input
            name="email"
            value={input.email}
            onChange={handleClick}
            type="email"
          />
          <label>Message:</label>
          <textarea
            name="message"
            value={input.message}
            onChange={handleClick}
            rows="5"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact