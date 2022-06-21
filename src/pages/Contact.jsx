import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [subject,setSubject] = useState("")
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    setName(prev => prev = "");
    setEmail(prev => prev = "");
    setTextarea(prev => prev = "");
    setSubject(prev => prev = "")

    emailjs.sendForm('service_p161bss', 'template_z89r7tr', form.current, 'XeNRpW_galsNCpvzG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert("Message Sended")
  };

  const getName = (e) => {
    setName(e.target.value);
  }

  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getSubject = (e) => {
    setSubject(e.target.value)
  }

  const getTextarea = (e) => {
    setTextarea(e.target.value);
  }


  return (
    <section id="contact" className="container">
      <h1 data-aos="fade-left" data-aos-duration="1000" className="title">Contact Me</h1>
      <form data-aos="zoom-in" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col col-6">
            <label>Your Name</label>
            <input value={name}
              onChange={getName} required type="text" />
          </div>
          <div className="col col-6">
            <label>Your Email</label>
            <input value={email}
              onChange={getEmail} required type="email" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Your Subject</label>
            <input onChange={getSubject} type="text" /></div>
        </div>

        <div className="row">
          <div className="col">
            <label>Message</label>
            <textarea  value={textarea}
            onChange={getTextarea} required cols="30" rows="10"></textarea>
          </div>
        </div>

        <button type='submit' className='btn-global'><i class="fa-solid fa-envelope"></i> Send</button>
      </form>
    </section>
  )
}
