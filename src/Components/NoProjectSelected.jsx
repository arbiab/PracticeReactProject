import React from 'react'
import './styles/NoProjectSelected.css'
import NoProjectImage from '../assets/no-projects.png'


const NoProjectSelected = () => {
  return (
    <div className='wrapper'>
      <img src={NoProjectImage} alt="An empty task list"/>
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button >Create a new Project</button>
      </p>
    </div>
  )
}

export default NoProjectSelected
