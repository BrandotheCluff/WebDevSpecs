import './App.css';
import useAxios from './hooks/useAxios';
import { useEffect, useState } from 'react';
// import axios from 'axios'
// import Coaching from './components/Coaching'
import WorkoutBuilder from './components/WorkoutBuilder';
import NavBar from './components/NavBar';

function App() {
  const info = useAxios('bodyPartList') 
  const back = useAxios('bodyPart/back')
  console.warn(back)
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
      <NavBar />
      <div className='MainImage'></div>
    </div>
  );
}

export default App;
