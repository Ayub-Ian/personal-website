import React from 'react'
import copyIcon from '../../assets/copy.svg'

function Footer () {
  return (
    <div>
      <div className='remarks'>
        <p>Thank you for viewing!</p>
        <p>Stay in touch.</p>
        <div className="mail">
            <a href="mailto:iayub.mia@gmail.com">iayub.mia@gmail.com</a>
            <div>
                <img src={copyIcon} alt="copy icon" />
            </div>
          </div>
        </div>
    <footer className="footer">
    <p className="footer-text">All rights reserved. 2023</p>
    <p className="footer-version">version 1.0</p>
  </footer>
  </div>
  )
}

export default Footer;