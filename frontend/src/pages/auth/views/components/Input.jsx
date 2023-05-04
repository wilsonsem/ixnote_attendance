import React from 'react'
import '../../styles/style.css'

const Input = (props) => {
    const { type, name, placeholder} = props
  return (
    <div className='input-wrap'>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input
