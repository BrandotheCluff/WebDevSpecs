import React, { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard";
import NavBar from "./components/NavBar";
import EditUser from "./components/EditUser";
import data from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(data);
  const [person, setPerson] = useState(users[index]);
  const [cardEdit, setCardEdit] = useState(false);
  let length = users.length;

  useEffect(() => {
    setPerson(users[index]);
  }, [users, index]);

  const increaseIndex = () => {
    if (index < length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0)
    }
  };

  const decreaseIndex = () => {
    if (index >= 1) {
      setIndex(index - 1);
    } else {
      setIndex(length - 1);
    }
  };

  // Create, Delete, Edit

 

  const deleteUser = () => {
    setUsers(prevState => {
      return prevState.filter(user => user !== users[index])
    })
  };

  const toggleEdit = (e) => {
    setCardEdit(cardEdit => !cardEdit)
  }

  const renderEdit = () => {
    setUsers(prevState => {
      return prevState.filter(user => user !== cardEdit)
    })
  }

  return (
    <div className="App">
      <header id="Header">Home</header>
      <div className="Borders">
      <div className="Card">
      <InfoCard data={person} length={length} index={index + 1} />
      </div>
      <div className="Nav">
      <NavBar up={increaseIndex} down={decreaseIndex} deleteUser={deleteUser} toggleEdit={toggleEdit}/>
      {cardEdit && < EditUser data={person} users={users} toggleEdit={toggleEdit} renderEdit={renderEdit} index={index}/>}
      
      </div>
      </div>
    </div>
  );
}

export default App;
