import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useState } from "react";

export const Form = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_xhbbnfj",
        "template_wuchwwt",
        form.current,
        "VE0PHde_EM179Ds5R"
      )
      .then(
        (result) => {

          setStatus("Success")
          setLoading(false);
          setTimeout(() => {
            setStatus("")
          }, 1000)

        }).catch(err => {
          setStatus("Error")
          setLoading(false);
          console.log(err)
          setTimeout(() => {
            setStatus("")
          }, 1000)
        })


  };


  console.log(status)



  return (
    <div name="form">
      <h1 style={{ textAlign: `center`, marginTop: `30px` }}>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Name</label>
        <input type="text" name="to_name" required />
        <label>Email</label>
        <input type="email" name="from_name" required />
        <label>Message</label>
        <textarea rows={6} name="message" required />
        <input className="btn" type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
      </form>
      <p className="" style={{ color: "red", display: "flex", justifyContent: "center ", marginBottom: "50px", marginTop: "-50px" }}>{status === "Success" && "Message sent successfully."}</p>
    </div>
  );
};
