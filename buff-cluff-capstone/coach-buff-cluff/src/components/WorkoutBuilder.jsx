import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Equipment from "./Equipment";
import WorkoutCard from "./WorkoutCard";

const WorkoutBuilder = ({}) => {
  const [data, setData] = useState([]);
  const [muscle, setMuscle] = useState("");
  const [equip, setEquip] = useState(false);

  const toggleEquip = () => {
     setEquip((equip) => !equip);
  
  };

  

  const [equipment, setEquipment] = useState("")


    useEffect(() => {
        fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`, {
          headers: {
            "X-RapidAPI-Key": "e8565680e9msh721a60b51d1533cp184228jsn2a4a6a37a7bc",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((json) => setData(json));
      }, [equipment]);
    
      // console.log(data);

    
      let filterByEquipment = data.filter((exercise) => {
      // console.log(muscle);
        return exercise.bodyPart === muscle;
      });

      const getWorkout = e => {
        setEquipment(e.target.value)
        // console.log(e.target.value)
      };

      const muscleHandler = (e) => {
        toggleEquip(e);
        setMuscle(e.target.value);
      };


  return (
    <div>
      <div className="SelectField">
        <select className="Selector" defaultValue="Muscle Groups" onChange={(e) => muscleHandler(e)}>
          <option disabled="disabled">Muscle Groups</option>
          <option className="BodyPart" value="back">Back</option>
          <option className="BodyPart" value="chest">Chest</option>
          <option className="BodyPart" value={"lower arms" && "upper arms"}>Arms</option>
          <option className="BodyPart" value={"lower legs" && "upper legs"}>Legs</option>
          <option className="BodyPart" value="waist">Abs</option>
          <option className="BodyPart" value="cardio">Cardio</option>
        </select>
        <select className="Selector" defaultValue="Intensity">
          <option disabled="disabled">Intensity</option>
          <option>Normal</option>
          <option>Intense</option>
          <option>🔥Very Intense🔥</option>
        </select>
      </div>
      
      <form>
        <input className="Exercise" readOnly={true}></input>
        <input className="Exercise" readOnly={true}></input>
        <input className="Exercise" readOnly={true}></input>
        <input className="Exercise" readOnly={true}></input>
      </form>
      {equip && <Equipment displayEquip={toggleEquip} showWorkout={getWorkout} />}
      {filterByEquipment.map((workout) => {
        return (
        <WorkoutCard workout={workout}/>
        );
      })}
    </div>
  );
};

export default WorkoutBuilder;
