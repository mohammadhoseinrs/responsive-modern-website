import React from 'react'
import { Feature } from '../../components'
import './Features.css'
import possibility from '../../assets/possibility.png'
export default function Features() {
  return (
    <div className='features__container'>
      <div className="feature__container__top">
          <div className="feature__top__right">
            <div>The Future is Now and You Just Need To Realize It. Step into Future Today &amp; Make it Happen.</div>
            <p>Request Early Access to Get Started</p>
          </div>
          <div className="feature__top__left">
            <div className="feature__top__left__item">
              <div className='feature__top__left__item__content'>
                <Feature />
              <div>Improving end distrusts instantly </div>
              </div>
              <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
            </div>
            <div className="feature__top__left__item">
              <div className='feature__top__left__item__content'>
              <Feature />
              <div>Become the tended active</div>
              </div>
              <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
            </div>
            <div className="feature__top__left__item">
            <div className='feature__top__left__item__content'>
              <Feature />
              <div>Message or am nothing</div>
              </div>
              <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
            </div>
            <div className="feature__top__left__item">
            <div className='feature__top__left__item__content'>
              <Feature />
              <div>Really boy law county</div>
              </div>
              <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
            </div>
          </div>
      </div>
      <div className="feature__container__bottom">
          <div className="feature__container__bottom__left">
            <img src={possibility} alt="" />
          </div>
          <div className="feature__container__bottom__right">
            <p className="feature__container__bottom__right__top">
              Request Early Access to Get Started
              </p>
            <div className="feature__container__bottom__right__title">
            The possibilities are beyond your imagination
            </div>
            <span>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</span>
            <p className="feature__container__bottom__right__bottom">
            Request Early Access to Get Started
            </p>
          </div>
      </div>
    </div>
  )
}
