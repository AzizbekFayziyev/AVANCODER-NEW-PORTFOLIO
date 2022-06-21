import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'

export default function Navbar() {

    const nav = useRef();
    const [active, setActive] = useState(false)

    function navActive() {
        nav.current.classList.toggle("nav-active");
        setActive(!active);
    }

    useEffect(() => {
        let link = document.querySelectorAll(".nav-link");
        
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener("click", () => {
                setActive(false);
                nav.current.classList.remove("nav-active");
            })
        }
    }, [])

    return (
        <nav>
            <h1>Azizbek Fayziyev</h1>
            {!active ?
                <i onClick={navActive} class="fa-solid fa-bars"></i>
                :
                <i onClick={navActive} class="fa-solid fa-xmark"></i>
            }

            <ul ref={nav} className="nav d-flex justify-content-center align-items-center">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link">About Me</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>


            </ul>
        </nav>
    )
}
