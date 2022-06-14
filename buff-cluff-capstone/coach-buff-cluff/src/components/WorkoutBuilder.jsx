import React from 'react'


const WorkoutBuilder = () => {

    return (
        <div>
            <div className='SelectField'>
            <select className='Selector' placeholder='Muscle Groups'>
                <option>Push</option>
                <option>Pull</option>
                <option>Legs</option>
                <option>Full Body</option>
            </select>
            <select className='Selector' placeholder='Intensity'>
                <option>Normal</option>
                <option>Intense</option>
                <option>🔥Very Intense🔥</option>
            </select>
            </div>
            <input className='Exercise' readOnly='true'></input>
            <input className='Exercise' readOnly='true'></input>
            <input className='Exercise' readOnly='true'></input>
            <input className='Exercise' readOnly='true'></input>
        </div>
    )
}


export default WorkoutBuilder