import React, { useState } from 'react'
import Item from './Item'
import '../App.css'

const ListDisplay = (props) => {

const { list, setList } = props 
const [selected, setSelected] = useState('')

const listMapped = list.filter((item) => {
    if(selected) return item.category === selected
    return item}).map((item, index) => {
    return (
        <Item key={index} item={item} id={index} list={list} setList={setList}/>
    )
})

  return (
    <div>
        <div id='filter'>
        <p>Show only:</p><select onChange={(e) => setSelected(e.target.value)} id='category'>
            <option defaultValue selected></option>
            <option value='chores'>chores</option>
          <option value='personal projects'>Personal Projects</option>
          <option value='school'>School</option>
        </select>
        <section id='list'>
        {listMapped}
        </section>
        </div>
    </div>
  )
}

export default ListDisplay