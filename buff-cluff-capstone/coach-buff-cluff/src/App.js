import "./App.css";
import { useEffect, useState } from "react";
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import WorkoutBuilder from "./components/WorkoutBuilder";
import NavBar from "./components/NavBar";
import MaxCalc from "./components/MaxCalc";

function App() {

  const [build, setBuild] = useState(false);
  const toggleBuild = () => {
    setBuild((build) => !build);
  };

  const [max, setMax] = useState(false)
  const toggleMax = () => {
    setMax((max) => !max)
  }

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
    <div className="MainImage">
      </div>
      <NavBar openForm={toggleBuild} openMax={toggleMax} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {max && <MaxCalc openMax={toggleMax}/>}
      {build && <WorkoutBuilder openForm={toggleBuild} />} 
    </div>
    </DndProvider>
  );
}
export default App;
