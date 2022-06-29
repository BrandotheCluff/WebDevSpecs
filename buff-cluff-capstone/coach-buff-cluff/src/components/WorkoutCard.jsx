import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import GifDisplay from './GifDisplay';
import "../App.css";

const WorkoutCard = ({workout, lift, id,}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "card",
    item: workout,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  const [gif, setGif] = useState(false)
    
    const toggleGif = (e) => {
        setGif((gif) => !gif)
    }
    // console.log(workout.name)
  return (
    <div ref={drag} style={{border: isDragging ? "5px silid pink" : "0px"}} className="NameAndGif">
      <div className='Card'>
        <p>{workout.name}</p>
        <button className="gifButton" onClick={toggleGif}>gif</button>
        </div>
        {gif && <GifDisplay displayGif={toggleGif} workout={workout}/>}
        
    </div>
  )
}


export default WorkoutCard