import React from 'react';
import logo from '../../assets/memoji-logo.jpeg'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
        <img src={logo} alt='memoji face' />
        </div>

        <ul className='links'>
            <li>
                <a href='#about-me'>About me</a>
            </li>
            <li>
                <a href='#work'>Work</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Header