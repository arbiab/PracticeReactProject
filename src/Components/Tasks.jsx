import React from 'react'
import './styles/Tasks.css'
import NewTask from './NewTask'
const Tasks = ({tasks , onAdd , onDelete }) => {
  return (
   <section>
    <h2>Tasks</h2>
   <NewTask onAdd={onAdd}/>
    {tasks.length===0 ? <p id='paragraph'>This project does not have any tasks yet.</p> :
    <ul>
         {tasks.map((task)=> (
         <li key={task.id}>
          <span>{task.text}</span>
          <button>Clear</button>
          </li>
          ))}
         </ul>}
    
     </section>
  )
}

export default Tasks
