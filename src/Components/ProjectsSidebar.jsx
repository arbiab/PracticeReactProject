import React from 'react'
import './styles/ProjectsSidebar.css'

const YourProjects = ({onStartAddProject, projects,onSelectProject,selectedProjectId }) => {
  return (
    <aside className='aside-container'>
        <h2>Your Projects</h2>
        <div id='btn'>
        <button onClick={onStartAddProject}>+ Add Project</button>
        </div>
        <ul>
         {projects.map(project=>{
          let cssClass = 'project-btn'
          if (project.id === selectedProjectId) {
                cssClass = 'project-btn-2'
          }
          return (
         <li key={project.id}>
          <button className={cssClass} 
          onClick={()=>{onSelectProject(project.id)}}
          >
            {project.title}
            </button>
         </li>
         )
         })}
        </ul>
    </aside>
  )
}

export default YourProjects
