import React from 'react'
import ServiceSlide from './ServicesSlide'

function Services() {
  return (
    <div className='container-fluid' id="Services" >
        
        <div className="section-padding">
            <div className='container' >
                <div data-aos="fade-up" data-aos-duration="800" className='my-info-wrapper text-center service-section'>
                    <p>My Services</p>
                    <h2>I'm Available For Hire</h2>
                </div>
                <ServiceSlide/>
            </div>
        </div>
    </div>
  )
}

export default Services