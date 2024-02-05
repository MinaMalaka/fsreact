import React from 'react';
import '../footer/footer.css'
export default function Navbar() {
    return (
        <>
            <footer className='text-center pt-5'>
                <div className="container py-5">
                    <div className="footer-top pt-5">
                        <div className="row">
                            <div className="content col-md-4">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                            <div className="content col-md-4">
                                <h3>AROUND THE WEB</h3>
                                <div className="links">
                                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                                    <i className="fa-solid fa-globe mx-1 icon"></i>
                                </div>
                            </div>
                            <div className="content col-md-4">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-5 py-3">
                    <p>Copyright © Your Website 2021</p>
                </div>


            </footer>
        </>
    )

}