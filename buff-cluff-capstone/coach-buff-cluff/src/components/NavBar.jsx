import React, {useState} from "react";
import WorkoutBuilder from "./WorkoutBuilder";

const NavBar = ({}) => {
    const [build, setBuild] = useState(false)

    const toggleBuild = () => {
        setBuild(build => !build)
      }
    return (
        <div className="NavBar">
            <div className='NavButtons'>
        <button>Coaching</button>
        <button>Tutorials</button>
        <button onClick={toggleBuild}>Build-a-Workout</button>
        <button>Max Calculator</button>
        {build && <WorkoutBuilder openForm={toggleBuild}/>}
            </div>
        </div>
    )
}



export default NavBar 