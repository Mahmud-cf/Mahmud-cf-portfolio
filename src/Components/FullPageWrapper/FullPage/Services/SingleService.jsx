import React from 'react'

function SingleService(props) {
  return (
    <div className='single-slider-wrapper text-center' >
        <div className='service-icon ' >
            <props.icon/>
        </div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
    </div>
  )
}

export default SingleService