import React from 'react'
import TypeWrighter from './TypeWrighter'
import mahmud from '../../../images/mahmud-cf.png'
import heroShape from '../../../images/hero-shape-purple .png'
import plain from '../../../images/plain.png'
import dot2 from '../../../images/hero-1-dot-2.png'
import heroCircle from '../../../images/hero-1-circle-2.png'

function Hero() {
  return (
    <div className='container-fluid header-wrapper' id='Home'  >
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='header-info-wrapper' >
                        <div className="under-header-info">
                            <p className='my-name'>My Name's Mahmud Ahmed</p>
                            <div className='typeing-text' >
                                <TypeWrighter/>
                            </div>
                            <p className='header-my-info'>Hi all, I am a professional Front-End Developer with 1 year of experience. I design and code beautifully simple things, and I love what I do. </p>
                            <a target="blank" className='btn resume-button' href="https://drive.google.com/drive/folders/159WcKgLRmBndhuVK6Xl-rcUvV4UcgCp_?usp=sharing">SEE MY RESUME</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={dot2} alt="" id='shape3' />
                    <img src={heroCircle} alt="" id='shape4' />
                     {/* it given outside to get main positon absoliut */}

                    <div className='header-right-side' >
                        <img src={heroShape} alt="" id='shape1' />
                        
                        <div className='header-picture-wrapper' >
                            <img src={mahmud} alt="" className='mahmud-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero