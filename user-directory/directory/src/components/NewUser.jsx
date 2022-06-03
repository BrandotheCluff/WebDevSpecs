import React from "react";


const NewUser = () => {
    return (
      <div>
        <form>
          <h3>Enter your information here!</h3>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="From"></input>
          <input type="text" placeholder="Job Title"></input>
          <input type="text" placeholder="Employer"></input>
          <h3>Gotta know those favorite movies player!</h3>
          <input type="text" placeholder="Movie 1"></input>
          <input type="text" placeholder="Movie 2"></input>
          <input type="text" placeholder="Movie 3"></input>
          <button>Add</button>
        </form>
      </div>
    )
  }

  export default NewUser