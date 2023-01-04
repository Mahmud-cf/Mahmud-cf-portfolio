import React from 'react'

function SinglePortfolio(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="800" >
        <a href={props.url} target='blank' >
            <div className='single-portfolio-wrapper' >
                <div className="single-portfolio-img">
                    <img src={props.img} alt=""  />
                </div>
                <div className="single-portfolio-title d-flex">
                    <h3>{props.name}</h3>
                </div>
            </div>
        </a>
    </div>
  )
}

export default SinglePortfolio