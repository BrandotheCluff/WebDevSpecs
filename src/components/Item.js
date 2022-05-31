import React, { useEffect, useState } from 'react'
import '../App.css'

const Item = ({ task, id, list, setList }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleDelete = (id) => {
      list.splice(id, 1)
      setList([...list])
  }
    return (
    <div id='item'>
        <h3 onClick={setIsChecked(!isChecked)} className={isChecked ? 'completed' : null}>{task.task}</h3>
        <h5>{task.category}</h5>
        <h1 onClick={() => handleDelete(id)}>x</h1>
    </div>
  )
}

export default Item