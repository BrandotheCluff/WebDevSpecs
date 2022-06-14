import './App.css';
import useAxios from './hooks/useAxios';
import { useEffect } from 'react';
import axios from 'axios'
import Coaching from './components/Coaching'
import WorkoutBuilder from './components/WorkoutBuilder';

function App() {
  const info = useAxios('bodyPartList')
  // const back = useAxios('bodyPart/back')
  // const cardio = useAxios('bodyPart/cardio')
  // const chest = useAxios('bodyPart/chest')
  // const lowerArms = useAxios('bodyPart/lower-arms')
  // const upperArms = useAxios('bodyPart/upper-arms')
  // const lowerLegs = useAxios('bodyPart/lower-legs')
  // const upperLegs = useAxios('bodyPart/upper-legs')
  // const shoulders = useAxios('bodyPart/shoulders')

useEffect(() => { 
})

  return (
    <div className="App">
    </div>
  );
}

export default App;
