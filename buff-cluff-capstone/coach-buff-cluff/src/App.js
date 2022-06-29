import "./App.css";
import { useEffect, useState } from "react";
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import WorkoutBuilder from "./components/WorkoutBuilder";
import NavBar from "./components/NavBar";
import Equipment from "./components/Equipment";

function App() {

  const [build, setBuild] = useState(false);

  const toggleBuild = () => {
    setBuild((build) => !build);
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <NavBar openForm={toggleBuild} />
      <div className="MainImage">asdf</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {build && <WorkoutBuilder openForm={toggleBuild} />}
    </div>
    </DndProvider>
  );
}

export default App;
