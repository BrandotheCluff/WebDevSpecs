import React, {useState} from 'react'
import GifDisplay from './GifDisplay'

const WorkoutCard = ({workout}) => {
  const [gif, setGif] = useState(false)
    
    const toggleGif = (e) => {
        setGif((gif) => !gif)
    }

  return (
    <div>
        <li>{workout.name}</li>
        <button onClick={toggleGif}>gif</button>
        {gif && <GifDisplay displayGif={toggleGif} workout={workout}/>}
        <br></br>
        <br></br>
    </div>
  )
}

export default WorkoutCard