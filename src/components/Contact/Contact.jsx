import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
const Contact = () => {

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tx4ikuw', 'template_sx7zmie', form.current, '5l4x_8A4-MIks0jKd')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" >
      <div className="w-left">
        <div className="awesome" >
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
          className="blur s-blur"
          style={{background: "#ABF1FF94"}}>
          </div>
        </div>
      </div>

      <div className="c-right" id='Contact'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button" / >
          <span>{done && "Thanks for contacting me!"}</span>
          <div 
          className="blur c-blur"
          style={{background: "var(--lightpurple"}}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
