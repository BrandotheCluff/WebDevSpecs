import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDrop } from "react-dnd";
import Equipment from "./Equipment";
import WorkoutCard from "./WorkoutCard";



const WorkoutBuilder = () => {
  const [data, setData] = useState([]);
  const [muscle, setMuscle] = useState("");
  const [equip, setEquip] = useState(false);
  const [equipment, setEquipment] = useState("");

  const toggleEquip = () => {
    setEquip((equip) => !equip);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${equipment}`)
      .then((response) => setData(response.data));
  }, [equipment]);
  // console.log(data);

  let filterByEquipment = data.filter((exercise) => {
    // console.log(muscle);
    return exercise.bodyPart === muscle;
  }).map((workout, index) => {
    return <WorkoutCard workout={workout} id={workout.id} key={workout.id} />;
  })

  const getWorkout = (e) => {
    setEquipment(e.target.value);
    // console.log(e.target.value)
  };

  const muscleHandler = (e) => {
    toggleEquip(e);
    setMuscle(e.target.value);
  };

  ///////////////Drag and Drop logic
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => {
      // console.log(item);
      addWorkoutToBoard(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWorkoutToBoard = (item) => {
    setBoard((board) => [...board, item]);
    console.log(item);
  };
  // console.log(board)
  

  return (
    <div className="WorkoutBuilder">
      <header className="BuilderTitle">Workout Builder</header>
      <div className="SelectField">
        <select
          className="Selector"
          defaultValue="Muscle Groups"
          onChange={(e) => muscleHandler(e)}
        >
          <option disabled="disabled">Muscle Groups</option>
          <option className="BodyPart" value="back">
            Back
          </option>
          <option className="BodyPart" value="chest">
            Chest
          </option>
          <option className="BodyPart" value={"lower arms" && "upper arms"}>
            Arms
          </option>
          <option className="BodyPart" value={"lower legs" && "upper legs"}>
            Legs
          </option>
          <option className="BodyPart" value="waist">
            Abs
          </option>
          <option className="BodyPart" value="cardio">
            Cardio
          </option>
        </select>
        {/* <select className="Selector" defaultValue="Intensity">
          <option disabled="disabled">Intensity</option>
          <option>Normal</option>
          <option>Intense</option>
          <option>🔥Very Intense🔥</option>
        </select> */}
      </div>
      <div className="Workout-Box">
      <div className="Workouts">
      {/* {equip && ( */}
          <Equipment displayEquip={toggleEquip} showWorkout={getWorkout} />
        {/* )} */}
        {/* {filterByEquipment.map((workout, index) => {
          return <WorkoutCard workout={workout} id={workout.id} key={workout} />;
        })} */}
        {filterByEquipment}
      </div>
      <div ref={drop} 
         className="Exercise">
          {board.map((workout, index) => {
    // console.log('board', workout)
    return <WorkoutCard workout={workout} key={index}/>;
  })}
        </div>
        </div> 
    </div>
  );
};

export default WorkoutBuilder;
