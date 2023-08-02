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
  console.log(input)
  return (
    <>
      <div className="basket-image">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
          alt=""
        />
        <div className="links">
          <NavLink end to="/">
            Ana səhifə
          </NavLink>{" "}
          / Əlaqə
          <div className="text">
            <h1>Əlaqə</h1>
          </div>
        </div>
      </div>
      <div className="contact">
      
        <div className="contact-text">
          <div className="small-text">
            <div className="contact-icon">
              <i className="fa-regular fa-phone orange" />
              <p className="pcontent">Qaynar xətt</p>
            </div>
            <div className="contact-information">
              <p className="pcontent">*5858</p>
            </div>
          </div>
          <div className="small-text">
            <div className="contact-icon">
              <i className="fa-regular fa-at orange" />
              <p className="pcontent ">E-mail:</p>
            </div>
            <div className="contact-information">
              <p className="pcontent">beautyshop@gmail.com</p>
            </div>
          </div>
          <div className="small-text">
            <div className="contact-icon">
              <i className="fa-regular fa-location-dot orange" />
              <p className="pcontent">Ünvan:</p>
            </div>
            <div className="contact-information">
              <p className="pcontent">Yasamal r-nu, Həsənbəy Zərdabi</p>
            </div>
          </div>
          <div className="small-text">
            <div className="contact-icon">
              <i className="fa-regular fa-calendar orange" />
              <p className="pcontent">İş günləri:</p>
            </div>
            <div className="contact-information">
              <p className="pcontent">Hər gün</p>
            </div>
          </div>
          <div className="small-text">
            <div className="contact-icon">
              <i className="fa-regular fa-clock orange" />
              <p className="pcontent">İş saatları:</p>
            </div>
            <div className="contact-information">
              <p className="pcontent">09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h1>Bizimlə əlaqə</h1>
        <form onSubmit={submitEvent}>
          <label>Ad:</label>
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
          <label>Mesaj:</label>
          <textarea
            name="message"
            value={input.message}
            onChange={handleClick}
            rows="5"
          ></textarea>
          <button type="submit">Göndər</button>
        </form>
      </div>
    </>
  );
}

export default Contact