import React, {useRef} from 'react'
import Button from './Button'
import homeLogo from '../assets/images/logo.svg'
import './Navbar.css'
import  {AiOutlineBars} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
// 3 rd party package (api) kenardan qurlasdirilanlar
// useRef, useState, useEffect, useReducer use ile baslayan her bir element if, else , lese if ile islene bilmez

const Navbar = () => {
  const navbarBtn = useRef()
  const overlayDivi = useRef()
  const openOverlay = () => {
   overlayDivi.current.classList.add('active')
  }
  const closeOverlay = () => {
    overlayDivi.current.classList.remove('active')
  }

  return (
    <>
    <div className="overlay" ref={overlayDivi}>
      <ImCross  className='close' onClick={closeOverlay} ref= {navbarBtn}/>
      <div className="overlay-menu">
      <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>

</div>
    <div className="header">
      <AiOutlineBars className='menu' onClick={openOverlay} ref={navbarBtn} />
      <div className="logo">
        <img src={homeLogo} alt="" />
      </div>
      <div className="navbar">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
      <div>
        <Button icindekiYazi="Sign IN"  />
      </div>
    </div>
     </>
  )
}


export default Navbar