import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import GifDisplay from './GifDisplay';

const WorkoutCard = ({workout, lift, id,}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "card",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))
  const [gif, setGif] = useState(false)
    
    const toggleGif = (e) => {
        setGif((gif) => !gif)
    }
    // console.log(workout)
  return (
    <div ref={drag} style={{border: isDragging ? "5px silid pink" : "0px"}} className="NameAndGif">
        <p>{workout.name}</p>
        <button onClick={toggleGif}>gif</button>
        {gif && <GifDisplay displayGif={toggleGif} workout={workout}/>}
    </div>
  )
}


export default WorkoutCard