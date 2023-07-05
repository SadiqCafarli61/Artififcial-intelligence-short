import React from 'react'
import Button from './Button'
import {BsFillPlayFill} from "react-icons/bs"
import homeIcon from "../assets/images/introduction.svg"



const Introduction = () => {
  return (
    
    
    <div className='introduction row'>
        <div className="intro-left-side col-12 col-md-6 col-lg-6">
          <h6>next generation platform</h6>
          <h2>Artificial intelligence & Cyber security</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, atque deleniti? Vero asperiores nostrum nihil labore quibusdam officiis, ea odit!</p>
          <div className="btn-section">
            <Button icindekiYazi = "Get Started" />
            <Button icindekiYazi = "Watch Video" />
          </div>
        </div>
        <div className="intro-right-side col-12 col-md-6 col-lg-5">
            <div className="image">
            <img src={homeIcon} alt="" />
            </div>
           
        </div>
    </div>
  )

}

export default Introduction