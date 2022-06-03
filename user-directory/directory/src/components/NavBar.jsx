import React, {useState} from "react";
import NewUser from "./NewUser"



const NavBar = ({up, down, deleteUser}) => {

const [formDisplay, setFormDisplay] = useState(false)

const openForm = (e) => {
    setFormDisplay(formDisplay => !formDisplay)
}

    return (
        <div>
            <button onClick={down}>Previous</button>
            <button>Edit</button>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={openForm}>New</button>
            <button onClick={up}>Next</button>
            {formDisplay && <NewUser />}
        </div>
    )
};

export default NavBar