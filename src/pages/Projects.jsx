import React, { useEffect } from 'react'
// Images
import work1 from "../images/works/1.png"
import work2 from "../images/works/2.png"
import work3 from "../images/works/3.png"
import work4 from "../images/works/4.png"
import work5 from "../images/works/5.png"
import work6 from "../images/works/6.png"
import work7 from "../images/works/7.png"
import work8 from "../images/works/8.png"
import work9 from "../images/works/9.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Projects() {

  return (
    <section id="projects">

      <h1 data-aos="flip-left" data-aos-duration="1000" className='title'>PROJECTS</h1>

      <div className="works">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="work-card">
              <img src={work1} />
              <div className="text">
                <h2>Online Tv Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> React.js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/NTV-Onlayn-Televedeniya-Veb-Sayti">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://ntvuz.netlify.app/"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work2} />
              <div className="text">
                <h2>Portfolio Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> React.js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Azizbek-Fayziyev-Partfolio">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://azizbekfayziyev.netlify.app"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work3} />
              <div className="text">
                <h2>Farniture Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> Html,Css,Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Real-project---Farniture-Web-site">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://dilxushmebellari.netlify.app"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work4} />
              <div className="text">
                <h2>School Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> Html,Css,Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/School-Web-Site-in-Sass">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://11-mk.netlify.app/"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work5} />
              <div className="text">
                <h2>Agency Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> Html,Css,Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Agency-Web-Site-">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://texnologies-web.netlify.app"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work6} />
              <div className="text">
                <h2>Game Web Site</h2>
                <h3><i class="fa-solid fa-gear"></i> Html,Css,Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Multi-Page-Responsive-game-Web-Site">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://gameprouz.netlify.app"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work7} />
              <div className="text">
                <h2>Web Application</h2>
                <h3><i class="fa-solid fa-gear"></i> React.Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Single-Page-Foots-App">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://spa-food-app.netlify.app/"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work8} />
              <div className="text">
                <h2>Movie Search App</h2>
                <h3><i class="fa-solid fa-gear"></i> React.Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Movie-Image-Search-Using-React.js">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://react-movie-web-site.netlify.app"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="work-card">
              <img src={work9} />
              <div className="text">
                <h2>Twitter Analog</h2>
                <h3><i class="fa-solid fa-gear"></i> React.Js</h3>
                <div className="view">
                  <a className='link' target="_blank" href="https://github.com/AzizbekFayziyev/Twitter-Analog-React.js-">View Code <i class="fa-solid fa-right-long"></i></a>
                  <a target="_blank" href="https://twitter-analog-fa.netlify.app/"><button className="btn-global">Live Preview</button></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
