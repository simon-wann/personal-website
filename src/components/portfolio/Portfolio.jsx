import React from 'react'
import './portfolio.css'
import Project1 from '../../assets/Project1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>


      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='' />
          </div>
            
          <h3>Project</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio