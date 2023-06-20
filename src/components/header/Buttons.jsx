import React from 'react'
import Resume from '../../assets/Simon-Wan-Resume.pdf'

const Buttons = () => {
  return (
    <div className='buttons'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default Buttons