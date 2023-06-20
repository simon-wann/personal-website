import React from 'react'
import Resume from '../../assets/Simon-Wan-Resume.pdf'

const Buttons = () => {
  return (
    <div className='buttons'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Buttons