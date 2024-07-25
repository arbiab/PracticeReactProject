import React from 'react'
import './styles/Input.css'
const Input = ({ label,textarea , ...props}) => {
  return (
    <p className='paragraph'>
        <label>{label}</label>
       {textarea ? <textarea {...props}/> : <input />}
         </p>
  )
}

export default Input
