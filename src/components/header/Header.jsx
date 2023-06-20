import React from 'react'
import './header.css'
import Buttons from './Buttons'
import Pfp from '../../assets/Profile Picture.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Simon Wan</h1>
        <h5 className='text-light'>Aspiring Web Developer</h5>
        <Buttons />
        <Socials />

        <div className="PFP">
          <img src={Pfp} alt="PFP" />
        </div>

      </div>
    </header>
  )
}

export default Header