import React, { Component } from "react";
import Slider from "react-slick";
import SingleService from "./SingleService";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsCodeSlash } from 'react-icons/bs'
import { FaReact, FaFigma } from 'react-icons/fa'
import { MdMobileFriendly } from 'react-icons/md'
import { SiRedux } from 'react-icons/si'
import { BiSupport } from 'react-icons/bi'

export default class ServiceSlide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <div data-aos="fade-right" data-aos-duration="800" >
        <div className="slide-show">
            <Slider {...settings}>
                <div className="single-slide">
                    <SingleService icon ={BsCodeSlash}
                        name='Front-End Development'
                        details="Basically I work more on front end development. I'm good at css framework bootstrap, JS framework 'React', React-Redux, Material ui etc. Front end development in my strong part. "
                    />
                </div>
                <div className="single-slide">
                    <SingleService icon ={FaReact}
                        name='React'
                        details="I am always comfortable working with  React on front-end. React hook, Routing, Components I khonw them well. I will make multiple-page or single-page React site."
                    />
                </div>
                <div className="single-slide">
                    <SingleService icon ={FaFigma}
                        name='PSD/Figma to React'
                        details="I will convert PSD/Figma to React. I can design perfectly as client need using bootstrap or tailwind css. I have good experience in bootstrap. "
                    />
                </div>
                <div className="single-slide">
                    <SingleService icon ={MdMobileFriendly}
                        name='Responsive Design'
                        details="I can design responsive and dynamic website for any kind of device."
                    />
                </div>
                <div className="single-slide">
                    <SingleService icon ={SiRedux}
                        name='Redux'
                        details="I will manage the state of web application using Redux.js."
                    />
                </div>
                <div className="single-slide">
                    <SingleService icon ={BiSupport}
                        name='Support'
                        details="I am always ready to support clients, and I provide unlimited support"
                    />
                </div>
                
            </Slider>
        </div>
      </div>
    );
  }
}