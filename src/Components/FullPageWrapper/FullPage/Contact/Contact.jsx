import React from 'react'
import { ImFacebook2 } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';

function Contact() {
  return (
    <div className='container-fluid' id='Contact' >
        <div className="container">
            <div className="section-padding contect-section" data-aos="fade-up" data-aos-duration="800">
                <div className="contact-wrapper " >
                    <div className="my-info-wrapper text-center contact-part">
                        <p>Have Question?</p>
                        <h2>Contact Me <BiMessageDots/></h2>
                        
                    </div>
                    <div className="under-contact-info text-center">
                        <h3> Phone : +88 01647083551 </h3>
                        <h3> Email : freelancermahmud826@gmail.com / <br /> or</h3>
                        <h3> Email : mahmudahmedcf@gmail.com </h3>
                    </div>
                    <div className="social-media d-flex text-center">
                        <div className="icon">
                            <a target='blank' href="https://www.facebook.com/profile.php?id=100034160195979"><ImFacebook2/></a>
                        </div>
                        <div className="icon">
                            <a target='blank' href="https://www.linkedin.com/in/mahmud-ahmed-37bbb5231/"><BsLinkedin/></a>
                        </div>
                        <div className="icon">
                            <a target='blank' href="https://twitter.com/MahmudAhmedCF"><FaTwitterSquare/></a>
                        </div>
                    </div>
                    <p className='text-center last-line' >Thanks for visiting my profile</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact