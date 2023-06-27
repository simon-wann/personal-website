import React from 'react'
import './header.css'
import Buttons from './Buttons'
import Pfp1 from '../../assets/Pfp1.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, my name is</h5>
        <h1>Simon Wan</h1>
        <h5 className='text-light'>Aspiring Web Developer</h5>
        <Buttons />
        <Socials />

        <div className='flex-container'>
          <img className="PFP"src={Pfp1} alt="PFP1" />
        </div>

      

      </div>
    </header>
  )
}

export default Header