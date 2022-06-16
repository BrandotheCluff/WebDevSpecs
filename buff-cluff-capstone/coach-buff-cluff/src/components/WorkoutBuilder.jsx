import React from 'react'
// import useAxios from '../hooks/useAxios'
// import {useState} from 'react'


const WorkoutBuilder = () => {

    

    return (
        <div>
            <div className='SelectField'>
            <select className='Selector' value='Muscle Groups'>
                <option className='BodyPart'>
                {/* <option>Barbell</option>
                <option>Dumbbell</option>
                <option>Kettlebell</option>
                <option>Assisted</option>
                <option>Trap Bar</option>
                <option></option>
                <option></option>
                <option></option> */}
                </option>
                <select className='BodyPart'>Chest</select>
                <select className='BodyPart'>Arms</select>
                <select className='BodyPart'>Legs</select>
                <select className='BodyPart'>Abs</select>
                <select className='BodyPart'>Cardio</select>
            </select>
            <select className='Selector'>Intensity
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