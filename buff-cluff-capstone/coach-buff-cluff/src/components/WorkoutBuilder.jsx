import React, {useState} from 'react'
import useAxios from '../hooks/useAxios'


const WorkoutBuilder = () => {

    

    return (
        <div>
            <div className='SelectField'>
            <select className='Selector' placeholder='Muscle Groups'>
                <select className='BodyPart'>Back
                <select>Barbell</select>
                <select>Dumbbell</select>
                <select>Kettlebell</select>
                <select>Assisted</select>
                <select></select>
                <select></select>
                <select></select>
                <select></select>
                </select>
                <select className='BodyPart'>Chest</select>
                <select className='BodyPart'>Arms</select>
                <select className='BodyPart'>Legs</select>
                <select className='BodyPart'>Abs</select>
                <select className='BodyPart'>Cardio</select>
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