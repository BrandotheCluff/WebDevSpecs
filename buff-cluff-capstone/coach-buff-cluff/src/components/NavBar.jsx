import React, {useState} from "react";
import WorkoutBuilder from "./WorkoutBuilder";

const NavBar = ({openForm}) => {
    
    return (
        <div className="NavBar">
            <div className='NavButtons'>
        <button>Coaching</button>
        <button>Tutorials</button>
        <button onClick={openForm}>Build-a-Workout</button>
        <button>Max Calculator</button>
        
            </div>
        </div>
    )
}



export default NavBar 