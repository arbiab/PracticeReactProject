import React, { useState } from 'react'
import './styles/NewTask.css'
const NewTask = ({onAdd}) => {
    const[enteredTask,setEnteredTask]=useState()
    const handleChange = (e)=> {
       setEnteredTask(e.target.value)
    }
    const handleAddTask = ()=> {
        onAdd(enteredTask)
        setEnteredTask('')
    }
  return (
    <>
    <div className='newtask-wrapper'>
      <input type='text'onChange={handleChange} value={enteredTask}/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
   
    </>
  )
}

export default NewTask
