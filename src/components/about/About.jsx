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
            Hi! I'm Simon, a rising senior at Baruch College, majoring in Computer Information Systems. 
            As a passionate and driven individual, I am dedicated to exploring the fascinating world of technology 
            and its endless possibilities. Currently, I am honing my skills and expanding my knowledge as a Web 
            Development Intern, where I have the opportunity to apply my classroom learnings to real-world projects. 
            With a new foundation in web development and an eye for detail, I strive to create user-friendly 
            and visually appealing websites. I am excited about the ever-evolving field of technology and look forward 
            to making meaningful contributions to the digital landscape.
          </p>
          </div>

          <div class="button-container">
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>

    </section>

  )
}

export default About