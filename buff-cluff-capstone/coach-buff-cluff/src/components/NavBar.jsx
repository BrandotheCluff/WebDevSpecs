import React, {useState} from "react";
import WorkoutBuilder from "./WorkoutBuilder";
import MaxCalc from "./MaxCalc";

const NavBar = ({openForm, openMax}) => {
    
    return (
        <div className="NavBar">
            <div className='NavButtonBox'>
        {/* <button>Coaching</button> */}
        {/* <button>Tutorials</button> */}
        <button className="NavButton" onClick={openForm}>Build-a-Workout</button>
        <button className="NavButton" onClick={openMax}>Max Calculator</button>
            </div>
        </div>
    )
}



export default NavBar 