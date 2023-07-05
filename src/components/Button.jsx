import React from 'react'

const Button = (props) => {
 
  return (
  <button className='btn-color'>{props.icindekiYazi} {props.klassAdi}</button>
  )
}

export default Button