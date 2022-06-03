import React, { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard";
import NavBar from "./components/NavBar";
import data from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(data);
  const [person, setPerson] = useState(users[index]);
  let length = users.length;

  useEffect(() => {
    setPerson(users[index]);
  }, [users, index]);

  const increaseIndex = () => {
    if (index <= length - 1) {
      setIndex(index + 1);
    } else {
      alert("This is the last user");
    }
  };

  const decreaseIndex = () => {
    if (index >= 1) {
      setIndex(index - 1);
    } else {
      alert("You are already at the beginning");
    }
  };

  // Create, Delete, Edit

 

  const deleteUser = () => {
    setUsers(prevState => {
      return prevState.filter(user => user !== users[index])
    })
  };

  return (
    <div className="App">
      <InfoCard data={person} length={length} index={index + 1} />
      <NavBar up={increaseIndex} down={decreaseIndex} deleteUser={deleteUser}/>
      
    </div>
  );
}

export default App;
