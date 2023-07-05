import React from 'react'
import dataImg from "../assets/images/data.svg"
import Button from './Button'

const Data = () => {
  return (
    <div className='data-section row'>
      <div className="left-side col-12 col-md-6 col-lg-6">
        <div className="image">
            <img src={dataImg} alt="" />
        </div>
      </div>
      <div className="right-side col-12 col-md-6 col-lg-4">
        <h2>Apply AI, Deep Learning and Data Sciece to solve</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <Button icindekiYazi= "Learn More"/>
      </div>
    </div>
  )
}

export default Data