import React from 'react'
import hero from '../images/hero.png'

export default function About() {
  return (
    <section id='about'>

      <div className="square"></div>
      <div className="square"></div>

      <div data-aos="flip-left" data-aos-duration="1000" className="title">
        <h1>ABOUT ME</h1>
      </div>

      <div className="me container">
        <img data-aos="zoom-in" data-aos-duration="1500" src={hero} alt="hero" />
        <p data-aos="fade-up" data-aos-duration="1000">I'm <span>Azizbek Fayziyev</span>. I am <span>15</span> years old and i live in <span>Tashkent</span>. <span>Front-End</span> Developer In <span>React.js </span>
          My dreams for the future
          are huge. My dream is to become a famous programmer in the
          future and implement projects that benefit the community </p>
        <p data-aos="fade-down" data-aos-duration="1000">I have prototyped and devloped <span>landing Pages</span>,
          <span>Sites</span>,<span>E-commerce</span>,<span>SPA Web Sites</span>,
          <span>Web Applications</span> and more..
        </p>
      </div>

      <div className="services">
        <div className="container">
          <h2 data-aos="zoom-out" data-aos-duration="1000">My Services</h2>
          <div className="row">
            <div data-aos="fade-right" data-aos-duration="1200" className="col-md-6 col-12">
              <h3><i class="fa-solid fa-file-code"></i> Landing Pages</h3>
              <h3><i class="fa-solid fa-file-lines"></i> Web Applications</h3>
            </div>

            <div data-aos="fade-left" data-aos-duration="1200" className="col-md-6 col-12">
              <h3><i class="fa-solid fa-window-restore"></i> SPA Web Apps</h3>
              <h3><i class="fa-solid fa-diagram-project"></i> Custom Web Sites</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="edu container">
        <h2 data-aos="zoom-out" data-aos-duration="1000">Education</h2>
        <div className="row">
          <div data-aos="fade-right" data-aos-duration="1200" className="col-md-6 col-12">
            <h3>December 2021 -
              February 2022</h3>
            <h1>One Million Uzbek Coders</h1>
            <p>Sertificate: Yes</p>
          </div>

          <div data-aos="fade-left" data-aos-duration="1200" className="col-md-6 col-12">
            <h3>December 2021 - May 2022</h3>
            <h1>IT Park</h1>
            <p>Sertificate: Yes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
