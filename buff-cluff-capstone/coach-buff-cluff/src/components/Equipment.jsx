import React, {useState, useEffect} from 'react'
import WorkoutBuilder from './WorkoutBuilder';

const Equipment = ({showWorkout}) => {
    // const [data, setData] = useState([]);
//   const [muscle, setMuscle] = useState("");
  


  return (
    <div className='Equip Form Div'>

        <form className='Equipment Form'>
        <h3>Equipment</h3>
        
        <select defaultValue={"Barbell"} onChange={showWorkout}>
        <option value="barbell">Barbell</option>
        </select>

        <select defaultValue={"Dumbbell"} onChange={showWorkout}>
        <option value="dumbbell">Dumbbell</option>
        </select>
        <select defaultValue={"Kettlebell"} onChange={showWorkout}>
        <option value="kettlebell">Kettlebell</option>
        </select>
        <select defaultValue={"Trap Bar"} onChange={showWorkout}> 
        <option value="trap bar">Trap Bar</option>
        </select>
        <select defaultValue={"Leverage Machine"} onChange={showWorkout}> 
        <option value="leverage machine">Leverage Machine</option>
        </select>
        <select defaultValue={"Smith Machine"} onChange={showWorkout}>
        <option value="smith machine">Smith Machine</option>
        </select>
        <select defaultValue={"Assisted"} onChange={showWorkout}>
        <option value="assisted">Assisted</option>
        </select>
        <select defaultValue={"Banded"} onChange={showWorkout}>
        <option value="band">Banded</option>
        </select>
        <select defaultValue={"Bodyweight (No Equipment)"} onChange={showWorkout}>
            <option value="body weight">Bodyweight (No Equipment)</option>
        </select>
        </form>
        {/* {filterByEquipment.map((workout) => {
        return (
          <div>
            <li>{workout.name}</li>
            <img src={workout.gifUrl} />
          </div>
        );
      })} */}
    </div>
  )
}

export default Equipment