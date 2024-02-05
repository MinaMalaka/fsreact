import React from 'react';
import '../portofolio/portofolio.css'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'

export default function Portofolio() {
    function fsImage() {
        document.getElementById('outer-1').classList.toggle('d-none')
      
    }
    function ndImage() {
        document.getElementById('outer-2').classList.toggle('d-none')
      
    }
    function rdImage() {
        document.getElementById('outer-3').classList.toggle('d-none')
      
    }

    return (
        <>
            <section id='#porto' className='text-center mb-2'>
            <div className="heading-porto">
                        <h1 className='mt-5 porto-head fw-bolder'>PORTFOLIO COMPONENT</h1>
                        <div className='d-flex justify-content-center align-items-center star my-4'>
                            <div className="d-inline-block hrule"></div><i className="fa-solid fa-star mx-3 mark-porto"></i><div className="d-inline-block hrule"></div>
                        </div>
                    </div>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between g-5">
                        <div className="col-img position-relative overflow-hidden rounded-3">
                            <img src={img1} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" id='fs-over' onClick={fsImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        <div className="col-img position-relative ">
                            <img src={img2} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" onClick={ndImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        <div className="col-img position-relative ">
                            <img src={img3} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" onClick={rdImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        <div className="col-img position-relative ">
                            <img src={img1} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" onClick={fsImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        <div className="col-img position-relative ">
                            <img src={img2} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" onClick={ndImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        <div className="col-img position-relative ">
                            <img src={img3} alt="" className='w-100 rounded-3'/>
                            <div className="over-lay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center rounded-3" onClick={rdImage}><i className="text-white fa-solid fa-plus fa-6x"></i></div>
                        </div>
                        
                    </div>
                    <div class=" inner-img position-fixed start-0 end-0 top-0 bottom-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none" id='outer-1' onClick={fsImage}><img src={img1} alt='' /></div>
                    <div class=" inner-img position-fixed start-0 end-0 top-0 bottom-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none" id='outer-2' onClick={ndImage}><img src={img2} alt='' /></div>
                    <div class=" inner-img position-fixed start-0 end-0 top-0 bottom-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none" id='outer-3' onClick={rdImage}><img src={img3} alt='' /></div>
                    
                </div>
            </section>
        </>
    )

}