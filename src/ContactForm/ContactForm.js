import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [outcome, setOutcome] = useState("");

  useEffect(() => {
    if (error) setOutcome("We need email name and a message.");
  }, [error, outcome]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target[0].value.length === 0) {
      setError(true);
      return;
    }
    if (e.target[1].value.length === 0) {
      setError(true);
      return;
    }
    if (e.target[2].value.length === 0) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_ad0b34j",
        "template_bttwwqn",
        form.current,
        "lAD87bJTt0S1f07UN"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setError(false);
          return;
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <section className="contact-form">
      <h4 className="form-outcome">{outcome}</h4>
      <form ref={form} onSubmit={sendEmail}>
        <section className="input-container">
          {/* <label>Name</label> */}
          <input placeholder="NAME *" type="text" name="user_name" />
        </section>
        <section className="input-container">
          {/* <label>Email</label> */}
          <input placeholder="EMAIL *" type="email" name="user_email" />
        </section>
        <section className="input-container">
          {/* <label>Message</label> */}
          <textarea rows={"6"} placeholder="MESSAGE *" name="message" />
        </section>
        <input className="submit" type="submit" value="Take Back Your Time" />
      </form>
    </section>
  );
};

export default ContactForm;
