import React from 'react'
import './about.css'
import Pfp from '../../assets/Profile Picture.jpg'

const About = () => {
  return (
    <section id='about'>
          <h5>Get to know me</h5>
          <h2>About</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image"></div>
                <img src={Pfp} alt="AboutPfp" /> 
            </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>

          <div class="button-container">
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>

    </section>

  )
}

export default About