import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const Menu=()=>(
  <>
          <li><a href="">Home</a></li>
          <li><a href="gpt3">What is GPT?</a></li>
          <li><a href="">Open Al</a></li>
          <li><a href="">Case Studies</a></li>
          <li><a href="">Library</a></li>
  
  </>
)
export default function Navbar() {
  const [toggleMenu,setToggleMenu]=useState(false)
  return (

    <div className='navbar__container'>
      <div className="navbar__content">
        <div className="navbar__logo">
          <img src={logo}  />
        </div>
        <ul className="navbar__content-left">
          <Menu />
        </ul>
        <div className="navbar__content-right">
            <p>Sign in</p>
            <a href="">Sign up</a>
        </div>
        <div className='navbar__toggle__menu'>
          <RiMenu3Line size={29} onClick={()=>setToggleMenu(true)} />
        </div>
      </div>
      {toggleMenu && 
      <motion.div
      initial={{x:500}}
      animate={{x:0}}
      transition={{duration:1,ease:'easeInOut'}}
      className="navbar__hamburgermenu gradient__bg">
        <div className="hamburgermenu__toggle">
          <RiCloseLine color='white' size={29} onClick={()=>setToggleMenu(false)} />
          </div>  
          <div className="hamburgermenu__content">
            <div className='hamburgermenu__content__item'>
              <Menu />
            </div>
            <div className="hamburgermenu__right">
              <p>Sign in</p>
              <a href="">Sign up</a>
            </div>
          </div>
        </motion.div>
      
}
    </div>
  )
}
