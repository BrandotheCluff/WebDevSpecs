import React, {useState} from "react";
import NewUser from "./NewUser"
import EditUser from "./EditUser"



const NavBar = ({up, down, deleteUser, toggleEdit}) => {

const [formDisplay, setFormDisplay] = useState(false)

const openForm = (e) => {
    setFormDisplay(formDisplay => !formDisplay)
}
  



    return (
        <div>
            <button onClick={down}>Previous</button>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={openForm}>New</button>
            <button onClick={up}>Next</button>
            {formDisplay && <NewUser openForm={openForm}/>}
        </div>
    )
};

export default NavBar