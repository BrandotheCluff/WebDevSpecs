import React, {useState} from "react";
import WorkoutBuilder from "./WorkoutBuilder";
import MaxCalc from "./MaxCalc";

const NavBar = ({openForm, openMax}) => {
    
    return (
        <div className="NavBar">
            <div className='NavButtons'>
        <button>Coaching</button>
        <button>Tutorials</button>
        <button onClick={openForm}>Build-a-Workout</button>
        <button onClick={openMax}>Max Calculator</button>
        
            </div>
        </div>
    )
}



export default NavBar 