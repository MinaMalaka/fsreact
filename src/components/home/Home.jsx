import React from 'react';
import avatar from '../../assets/images/avataaars.svg'
import '../home/home.css'
export default function Navbar() {
    return (
        <>
            <section id='home'>
                <div className="content text-center text-white">
                    <div className="img">
                        <img src={avatar} alt="" className='' />
                        <div className="heading mb-2 mt-3">
                            <h1 className='mb-3'>ABOUT COMPONENT</h1>
                            <div className="d-inline-block rule"></div><i className="fa-solid fa-star mx-3"></i><div className="d-inline-block rule"></div>
                        </div>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </section>
        </>
    )

}