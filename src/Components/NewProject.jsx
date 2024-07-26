import React, { useRef } from 'react'
import Input from './Input'
import './styles/NewProject.css'
import Modal from './Modal'
const NewProject = ({onAdd , onCancel}) => {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()
  const handleSave = ()=> {
 const enteredTitle = title.current.value
 const enteredDescription = description.current.value
 const enteredDueDate = dueDate.current.value
 if(enteredTitle.trim() === '' ||
  enteredDescription.trim()==='' || 
  enteredDueDate.trim() ===''){
    modal.current.open();
    return
 }
 onAdd({
  title:enteredTitle,
  description:enteredDescription,
  dueDate:enteredDueDate
 })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Okay"> 
    <h2 id='modal-header'>Invalid Input</h2>
    <p className='modal-paragraph'>Oops ... looks like you forgot to enter a value</p>
    <p className='modal-paragraph'>Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className='wrapper'>
    <div>
      <Input type="text" label="Title" ref={title}/>
      <Input label="Descritption" ref={description} textarea/>
      <Input type="date" label="Due Date" ref={dueDate}/>
    </div>
    <menu className='wrapper-menu'>
        <li><button className='cancel-btn' onClick={onCancel}>Cancel</button></li>
        <li><button className='save-btn' onClick={handleSave}>Save</button></li>
    </menu>
    </div>
    </>
  )
}

export default NewProject
