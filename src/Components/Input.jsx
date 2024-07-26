import React ,{forwardRef} from 'react'
import './styles/Input.css'
const Input = forwardRef(function Input  ({ label,textarea , ...props},ref)  {
  return (
    <p className='paragraph'>
        <label>{label}</label>
       {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
         </p>
  )
})

export default Input
