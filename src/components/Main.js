import React, { useState } from 'react'
import ListDisplay from './ListDisplay'
import '../App.css'

const Main = () => {

  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, {task: task, category: category}])
    setTask('')
  }

  return (
    <div id='main'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id='input'>
        <input type='text' placeholder='task' onChange={(e) => handleChange(e)} value={task}></input>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue disabled selected>Category</option>
          <option value='chores'>chores</option>
          <option value='personal projects'>Personal Projects</option>
          <option value='school'>School</option>
        </select>
        </div>
        <button type='submit'>Add</button>
      </form>
      <ListDisplay list={list} setList={setList}/>
    </div>
  )
}

export default Main