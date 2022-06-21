import React from 'react';
import hero from "../images/hero2.png";

// HOME PAGE
export default function Home() {
    return (
        <main>
            <div className="circle">
            <img data-aos="fade-left" data-aos-duration="2000" src={hero} alt="hero image"/>
            </div>
            
            <div className="container">

                <div data-aos="fade-right" data-aos-duration="2000" className="text">
                    <h1>Azizbek Fayziyev</h1>
                    <h2>Front-End Devloper & You Tuber</h2>
                    <p>Front-end developer focused on creating Web and Web applications. I really like different projects that solve real problems.</p>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1500" className="btn-container">
                    <a className="link" href="#contact"><i class="fa-solid fa-cloud-arrow-down"></i> Contact Me</a>
                    <a href="#projects"><button className='btn-global'><i class="fa-solid fa-circle-down"></i> Portfolio</button></a>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="social">
                    <a target="_blank" href="https://github.com/AzizbekFayziyev"><i class="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCkB-Ymo4ICLi-yCgVkXoq5g"><i class="fa-brands fa-youtube"></i></a>
                    <a target="_blank" href="https://t.me/AVANGARD2007"><i class="fa-brands fa-telegram"></i></a>
                    <a target="_blank" href="https://t.me/ItdarslariUz_bot"><i class="fa-solid fa-robot"></i></a>
                    <a target="_blank" href="https://t.me/Fayziyev_Azizbek"><i class="fa-solid fa-bullhorn"></i></a>
                </div>
            </div>
        </main>
    )
}
