import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar/nav.css'
export default function Navbar() {
    function active1() {
        document.getElementById('aboutTab').classList.add('active')
        document.getElementById('porto').classList.remove('active')
        document.getElementById('contact').classList.remove('active')
    }
    function active2() {
        document.getElementById('porto').classList.add('active')
        document.getElementById('aboutTab').classList.remove('active')
        document.getElementById('contact').classList.remove('active')
    }
    function active3() {
        document.getElementById('contact').classList.add('active')
        document.getElementById('aboutTab').classList.remove('active')
        document.getElementById('porto').classList.remove('active')
    }

    return (
        <>
            <header id="nav-header">
                <nav className="d-flex justify-content-between align-items-center position-fixed top-0 left-0 w-100">
                    <div className="head">
                        <Link className="anchors" to={'home'}>START FRAMEWORK</Link>
                    </div>

                    <ul className="list-unstyled d-flex">
                        <li className="me-5 ">
                            <Link className="anchor " id="aboutTab" to={'about'} onClick={active1}>ABOUT</Link>
                        </li>
                        <li className="me-5">
                            <Link className="anchor" to={'portofolio'} id="porto" onClick={active2}>PORTOFOLIO</Link>
                        </li>
                        <li className="me-5">
                            <Link className="anchor" to={'contact'} id="contact" onClick={active3}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    )

}