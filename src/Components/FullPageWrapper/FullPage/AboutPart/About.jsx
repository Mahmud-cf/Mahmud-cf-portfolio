import React from 'react'
import BasicExample from './SkillPercent'

function About() {
  return (
    <div className='container-fluid section-padding about-wrapper ' id='About' >
        <div className="container">
            <div className='under-about-wrapper'>
                <div className='my-info-wrapper text-center' data-aos="fade-up"
     data-aos-duration="800">
                    <p>About Me</p>
                    <h2>My Name's Mahmud Ahmed</h2>
                    <div className="col-md-8 offset-md-2 my-info">
                        <p>Hi, I like to introduce myself as a fron end Web Developer. I have one year of experience in this field. I have much knowledge in pure CSS with animation and css framework bootstrap and tailwind.I can do design pixel perfect. I work with <span>React JS</span> on the front end. I am comfortable with 'React JS'. I am used to learning new technologies all the time. </p>
                    </div>
                </div>
                <div className="row" >
                        <BasicExample percent='90%' name='Front-End Development' />
                        <BasicExample percent='90%' name='React JS' />
                        <BasicExample percent='70%' name='Javascript' />
                        <BasicExample percent='70%' name='Design' />
                        <BasicExample percent='85%' name='Responsive Design' />
                        <BasicExample percent='96%' name='PSD/Figma to React' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About