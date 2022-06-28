import "./App.css";
import { useEffect, useState } from "react";
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import WorkoutBuilder from "./components/WorkoutBuilder";
import NavBar from "./components/NavBar";
import Equipment from "./components/Equipment";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //     fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/barbell', {
  //       headers: {
  //         'X-RapidAPI-Key': 'e8565680e9msh721a60b51d1533cp184228jsn2a4a6a37a7bc',
  //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);

  // //   console.log(data);

  // let filterByEquipment = data.filter((exercise) => {
  //       return exercise.bodyPart === "back"
  //     })

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
