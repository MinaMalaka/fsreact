import React from 'react';
import '../contact/contact.css'
export default function Navbar() {
    function tab() {
        if (document.getElementById('name').value !== '') {
            document.getElementById('label-1').style.top = '-10PX'

        } else {
            document.getElementById('label-1').style.top = '35PX'

        }

    }
    function tab1() {

        if (document.getElementById('age').value !== '') {
            document.getElementById('label-2').style.top = '-10PX'

        } else {
            document.getElementById('label-2').style.top = '35PX'

        }
    }
    function tab2() {

        if (document.getElementById('email').value !== '') {
            document.getElementById('label-3').style.top = '-10PX'

        } else {
            document.getElementById('label-3').style.top = '35PX'

        }
    }
    function tab3() {

        if (document.getElementById('pass').value !== '') {
            document.getElementById('label-4').style.top = '-10PX'

        } else {
            document.getElementById('label-4').style.top = '35PX'

        }
    }

    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="heading text-center">
                        <h1 className='mt-5 porto-head fw-bolder'>CONATCT SECTION</h1>
                        <div className='d-flex justify-content-center align-items-center star my-4'>
                            <div className="d-inline-block hrule"></div><i className="fa-solid fa-star mx-3 mark-porto"></i><div className="d-inline-block hrule"></div>
                        </div>
                    </div>
                    <div className="form w-50 m-auto pb-5">
                        <label htmlFor="name" id='label-1' className=''>userName:</label>
                        <input type="text" name="username" id='name' className="form-control mb-3 border-bottom border-0" placeholder="Enter Your Name" onInput={tab} />
                        <label htmlFor="age" id='label-2'>userAge:</label>
                        <input type="number" name="age" id='age' className="form-control mb-3 border-bottom border-0" placeholder="Enter Your Age" onInput={tab1} />
                        <label htmlFor="email" id='label-3'>userEmail:</label>
                        <input type="email" name="email" id='email' className="form-control mb-3 border-bottom border-0" placeholder="Enter Your Email" onInput={tab2} />
                        <label htmlFor="pass" id='label-4'>userPass:</label>
                        <input type="password" name="pass" id='pass' className="form-control mb-3 border-bottom border-0" placeholder="Enter Your Password" onInput={tab3} />
                        <button className="btn btn-main"> Send Message</button>
                    </div>
                </div>
            </section>
        </>
    )

}