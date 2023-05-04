import React from 'react'
import '../../styles/style.css'

const Button = (props) => {
  return (
    <div className='btn-wrap'>
      <button>{props.btntype}</button>
    </div>
  )
}

export default Button
