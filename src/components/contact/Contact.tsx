import "./contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef(null);
  const key = process.env.REACT_APP_EMAILJS_KEY

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_lg2kcet', 'template_rxxn9vk', form.current!, `${key}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className=" contact__form">
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your eamil" required />
          <textarea name="message" rows={7} placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
