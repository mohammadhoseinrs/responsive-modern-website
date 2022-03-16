import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './Footer.css';


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__title">
          Do you want to step in to the future before others
          </div>
          <div className="footer__button">
              <a href="">Request Early Access</a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <img src={gpt3Logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer__bottom__right">
          <div className="footer__bottom__item">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
          </div>
          <div className="footer__bottom__item">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
          </div>
          <div className="footer__bottom__item">
                <h4>Get in touch</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
          </div>
          </div>
        </div>
        <div className='footer__footer'>© 2021 GPT-3. All rights reserved.</div>

      </div>
    </div>
  )
}
