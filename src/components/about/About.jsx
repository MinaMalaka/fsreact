import React from 'react';
import '../about/about.css'
export default function About() {
    return (
        <>
            <section id='about'>
                <div className="container">
                    <div className="heading mb-3">
                        <h1 className='mb-3'>ABOUT COMPONENT</h1>
                        <div className="d-inline-block rule"></div><i className="fa-solid fa-star mx-3"></i><div className="d-inline-block rule"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                        </div>
                        <div className="col-md-6">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}