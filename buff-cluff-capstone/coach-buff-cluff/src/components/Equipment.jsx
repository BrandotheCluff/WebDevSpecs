import React from 'react'

const Equipment = ({showWorkout}) => {
    // const [data, setData] = useState([]);
//   const [muscle, setMuscle] = useState("");
  


  return (
    <div className='EquipField'>
        <header className='EquipTitle'>Equipment</header>
        
        <select className='EquipSelect' defaultValue={"Select Equipment"} onChange={(e) => showWorkout(e)}>
        <option disabled="disabled">Select Equipment</option>

        <option value="barbell">Barbell</option>
        
         {/* defaultValue={"Dumbbell"} onChange={showWorkout} */}
        <option value="dumbbell">Dumbbell</option>
        
         {/* defaultValue={"Kettlebell"} onChange={showWorkout} */}
        <option value="kettlebell">Kettlebell</option>
        
         {/* defaultValue={"Trap Bar"} onChange={showWorkout} */}
        <option value="trap bar">Trap Bar</option>
        
         {/* defaultValue={"Leverage Machine"} onChange={showWorkout}  */}
        <option value="leverage machine">Leverage Machine</option>
        
         {/* defaultValue={"Smith Machine"} onChange={showWorkout} */}
        <option value="smith machine">Smith Machine</option>
        
         {/* defaultValue={"Assisted"} onChange={showWorkout} */}
        <option value="assisted">Assisted</option>
        
         {/* defaultValue={"Banded"} onChange={showWorkout} */}
        <option value="band">Banded</option>
        
         {/* defaultValue={"Bodyweight (No Equipment)"} onChange={showWorkout} */}
            <option value="body weight">Bodyweight (No Equipment)</option>
        </select>
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