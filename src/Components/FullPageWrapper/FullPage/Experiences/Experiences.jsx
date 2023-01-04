import React from 'react'
import ExperiencesDetails from './ExperiencesDetails'

function Experiences() {
  return (
    <div className='container-fluid' id='Experiences'>
        <div className="container">
            <div className="section-padding">
                <div  className="my-info-wrapper text-center experiences-heading">
                    <h2>EXPERIENCES</h2>
                </div>
                <div className="experiences-details">
                    <ExperiencesDetails/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences