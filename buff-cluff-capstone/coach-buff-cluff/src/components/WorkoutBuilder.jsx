import React, {useEffect} from 'react'
import useAxios from '../hooks/useAxios'
// import {useState} from 'react'


const WorkoutBuilder = () => {
    


    return (
        <div>
            <div className='SelectField'>
            <select className='Selector' defaultValue="Muscle Groups">
                <option disabled='disabled'>Muscle Groups</option>
                <option className='BodyPart'>Back</option>
                <option className='BodyPart'>Chest</option>
                <option className='BodyPart'>Arms</option>
                <option className='BodyPart'>Legs</option>
                <option className='BodyPart'>Abs</option>
                <option className='BodyPart'>Cardio</option>
                
            </select>
            <select className='Selector' defaultValue="Intensity">
                <option disabled='disabled'>Intensity</option>
                <option>Normal</option>
                <option>Intense</option>
                <option>🔥Very Intense🔥</option>
            </select>
            </div>
            <input className='Exercise' readOnly={true}></input>
            <input className='Exercise' readOnly={true}></input>
            <input className='Exercise' readOnly={true}></input>
            <input className='Exercise' readOnly={true}></input>
        </div>
    )
}


export default WorkoutBuilder