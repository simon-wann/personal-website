import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import NYPlogo from '../../assets/NYP logo.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__1">
          <img src={NYPlogo} alt='NYPlogo'/>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
            </article>
          </div>

        </div>

        <div className="experience__2">

        </div>
      </div>

    </section>
  )
}

export default Experience