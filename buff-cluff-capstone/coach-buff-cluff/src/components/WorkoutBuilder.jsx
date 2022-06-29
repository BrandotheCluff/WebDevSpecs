import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDrop } from "react-dnd";
import Equipment from "./Equipment";
import WorkoutCard from "./WorkoutCard";

const WorkoutBuilder = () => {
  const [data, setData] = useState([]);
  const [muscle, setMuscle] = useState("");
  const [equip, setEquip] = useState(false);

  const toggleEquip = () => {
    setEquip((equip) => !equip);
  };

  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${equipment}`)
      .then((response) => setData(response.data));
    // .then((json) => setData(json));
  }, [equipment]);

  // console.log(data);

  let filterByEquipment = data.filter((exercise) => {
    // console.log(muscle);
    return exercise.bodyPart === muscle;
  });

  const getWorkout = (e) => {
    setEquipment(e.target.value);
    // console.log(e.target.value)
  };

  const muscleHandler = (e) => {
    toggleEquip(e);
    setMuscle(e.target.value);
  };

  //Drag and Drop logic
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => {
      console.log(data);
      addWorkoutToBoard(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWorkoutToBoard = (item) => {
    // console.log(id, arr)
    // const workoutList = arr.filter((lift) => id == lift.id);
    setBoard((board) => [...board, item]);
    console.log(typeof id, data);
  };
  // console.log(board)
  const dropFunc1 = board.map((workout) => {
    return <WorkoutCard workout={workout} />;
  });

  return (
    <div>
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
        <select className="Selector" defaultValue="Intensity">
          <option disabled="disabled">Intensity</option>
          <option>Normal</option>
          <option>Intense</option>
          <option>🔥Very Intense🔥</option>
        </select>
      </div>

      <form className="WorkoutField">
        <div
          ref={drop}
          style={{ border: "2px solid black", height: "100px", width: "260px" }}
          className="Exercise"
        >
          {dropFunc1}
        </div>
        <div
          ref={drop}
          style={{ border: "2px solid black", height: "100px", width: "260px" }}
          className="Exercise"
        >
        </div>
        <div className="Exercise"></div>
        <div className="Exercise"></div>
      </form>
      <div className="Workouts">
        {equip && (
          <Equipment displayEquip={toggleEquip} showWorkout={getWorkout} />
        )}
        {filterByEquipment.map((workout) => {
          return <WorkoutCard workout={workout} id={workout.id} />;
        })}
      </div>
    </div>
  );
};

export default WorkoutBuilder;
