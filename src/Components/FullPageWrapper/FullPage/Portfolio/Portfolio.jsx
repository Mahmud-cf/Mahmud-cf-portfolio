import React from 'react'
import SinglePortfolio from './SinglePortfolio'
import arogga from '../../../../images/arogga-pic.png'
import domic from '../../../../images/domic.png'
import trello from '../../../../images/trello-app-pic.png'
import todo from '../../../../images/todo-app-pic.png'
import IC from '../../../../images/interactive-cares.png'
import rou from '../../../../images/rou.png'

function Portfolio() {
  return (
    <div className='container-fluid' id="Portfolio" >
        <div className="container">
            <div className="section-padding">
                <div data-aos="fade-up" data-aos-duration="800" className="my-info-wrapper text-center portfolio-title">
                    <p>Portfolio</p>
                    <h2>I Love What I Do</h2>
                </div>
                <div className='row' >
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={arogga} name="Arogga app" url='https://startling-biscotti-998fef.netlify.app/' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={domic} name="Domic" url='https://chimerical-douhua-12cadb.netlify.app' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={trello} name="Trello App" url='https://trello-app-cf.netlify.app' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={todo} name="Todo App" url='https://todo-app-29.netlify.app' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={IC} name="Interactive Cares Website" url='https://shimmering-mandazi-e360b6.netlify.app' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-portfolio">
                            <SinglePortfolio img={rou} name="PSD to HTML" url='https://magenta-piroshki-4b32c2.netlify.app' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio