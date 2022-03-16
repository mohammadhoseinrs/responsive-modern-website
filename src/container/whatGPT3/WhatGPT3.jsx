import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.css'
export default function WhatGPT3() {
  return (
    <div className='gpt__container' id='gpt3'>
      <div className='gpt__content'>
        <div className="gpt__content__top">
          <div>
          <Feature />
          <p className='gpt__content__top__left'>What is GPT-3</p>
          </div>
          <p className='gpt__content__top__right'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className="gpt__content__middle">
          <p className='gpt__content__middle__left'>The possibilities are beyond your imagination</p>
          <p className='gpt__content__middle__right'>Explore The Library</p>
        </div>
        <div className="gpt__content__bottom">
          <div className="gpt__content__bottom__item">
          <Feature />
              <p>Chatbots</p>
              <div>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </div>
          </div>
          <div className="gpt__content__bottom__item">
          <Feature />
              <p>Knowledgebase</p>
              <div>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</div>
          </div>
          <div className="gpt__content__bottom__item">
          <Feature />
              <p>Education</p>
              <div>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</div>
          </div>
        </div>
      </div>
    </div>
  )
}
