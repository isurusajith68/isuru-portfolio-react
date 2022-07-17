import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useState } from "react";


export const Form = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xhbbnfj",
        "template_wuchwwt",
        form.current,
        "VE0PHde_EM179Ds5R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
        },

        (error) => {
          console.log(error.text);
          setStatus("Un");
        }
      );
    e.target.reset();
  };

  return (
    <div name='form'>
    <h1  style={{textAlign:`center`, marginTop:`30px`}}>Contact</h1>
      {status && RenderAlert()}
      <form ref={form} onSubmit={sendEmail}>
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Name</label>
        <input type="text" name="to_name" required />
        <label>Email</label>
        <input type="email" name="from_name" required />
        <label>Message</label>
        <textarea rows={6} name="message" required />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

const RenderAlert = () => (
  <div className="suc">
    <p  className="p1">message sent successfully.</p>
  </div>
);
