import React from 'react'
import './Brand.css'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import google from '../../assets/google.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'

const logo=[google , slack ,atlassian , dropbox , shopify]
export default function Brand() {
  return (
    <div className='brand__container'>
      {logo.map((logo,index)=>(
        <div key={index} className='brand__logo' >
        <img  src={logo} alt="" />
        </div>
      ))}
    </div>
  )
}
