import React from 'react'
import Input from './Input'
import './styles/NewProject.css'
const NewProject = () => {
  return (
    <div className='wrapper'>
    
    <div>
      <Input label="Title"/>
      <Input label="Descritption" textarea/>
      <Input label="Due Date"/>
    </div>
    <menu className='wrapper-menu'>
        <li><button className='cancel-btn'>Cancel</button></li>
        <li><button className='save-btn'>Save</button></li>
    </menu>
    </div>
  )
}

export default NewProject
