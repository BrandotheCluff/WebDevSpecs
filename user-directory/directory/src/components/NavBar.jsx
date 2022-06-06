import React, { useState } from "react";
import NewUser from "./NewUser";
import "../App.css"

const NavBar = ({ up, down, deleteUser, toggleEdit }) => {
  const [formDisplay, setFormDisplay] = useState(false);

  const openForm = (e) => {
    setFormDisplay((formDisplay) => !formDisplay);
  };

  return (
    <div className="BtnField">
      <button className="Plain" onClick={down}>
        Previous
      </button>
      <div className="BlueBtnBox">
        <button className="BlueBtn" onClick={toggleEdit}>
          Edit
        </button>
        <button className="BlueBtn" onClick={deleteUser}>
          Delete
        </button>
        <button className="BlueBtn" onClick={openForm}>
          New
        </button>
      </div>
      <button className="Plain" onClick={up}>
        Next
      </button>
      {formDisplay && <NewUser openForm={openForm} />}
    </div>
  );
};

export default NavBar;
