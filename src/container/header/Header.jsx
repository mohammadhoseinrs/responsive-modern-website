import React from 'react'
import './Header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
export default function Header() {
  return (
    <div className='header__container'>
      <div className="header__content">
        <p className='header__content__top'>
        Let’s Build Something amazing with GPT-3 OpenAI
        </p>
        <p className="header__content__middle">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <form className="header__content__form">
          <input type="text" placeholder='Your Email Address' />
          <button>Get Started</button>
        </form>
        <div className="header__content__signup">
          <div className="header__content__signup__image">
              <img src={people} alt="" />
          </div>
          <p className='header__content__signup__para'>
          1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="header__image">
        <div className='header__image__container'>
           <img src={ai} alt="" />
        </div>
      </div>
    </div>
  )
}
