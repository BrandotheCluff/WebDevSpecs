import React, { useState } from "react";
import data from '../data'

const EditUser = ({ toggleEdit, renderEdit, data, index, users }) => {
  const [first, setFirst] = useState(data.name.first);
  const [last, setLast] = useState(data.name.last);
  const [city, setCity] = useState(data.city);
  const [country, setCountry] = useState(data.country);
  const [employer, setEmployer] = useState(data.employer);
  const [title, setTitle] = useState(data.title);
  const [movie1, setMovie1] = useState(data.favoriteMovies[0]);
  const [movie2, setMovie2] = useState(data.favoriteMovies[1]);
  const [movie3, setMovie3] = useState(data.favoriteMovies[2]);

  const update = (e) => {
    switch (e.target.name) {
      case "first":
        setFirst(e.target.value);
        break;
      case "last":
        setLast(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "employer":
        setEmployer(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "movie1":
        setMovie1(e.target.value);
        break;
      case "movie2":
        setMovie2(e.target.value);
        break;
      case "movie3":
        setMovie3(e.target.value);
    }
  };

  const saveChanges = () => {
    users.splice(index, 1, {
      name: {
        first,
        last,
      },
      city,
      country,
      title,
      employer,
      favoriteMovies: [movie1, movie2, movie3],
    });
    
  };

  return (
    <div>
      <h2>Edit User</h2>
      <h3>Name</h3>
      <input
        type="text"
        onChange={update}
        name="first"
        placeholder={first}
      ></input>
      <input
        type="text"
        onChange={update}
        name="last"
        placeholder={last}
      ></input>
      <div>
        <h3>From:</h3>
        <input
          type="text"
          onChange={update}
          name="city"
          placeholder={city}
        ></input>
        <input
          type="text"
          onChange={update}
          name="country"
          placeholder={country}
        ></input>
        <h3>Job Title:</h3>
        <input
          type="text"
          onChange={update}
          name="title"
          placeholder={title}
        ></input>
        <h3>Employer:</h3>
        <input
          type="text"
          onChange={update}
          name="employer"
          placeholder={employer}
        ></input>
      </div>
      <div>
        <h3>Favorite Movies:</h3>
        <input
          type="text"
          onChange={update}
          name="movie1"
          placeholder={movie1}
        ></input>
        <input
          type="text"
          onChange={update}
          name="movie2"
          placeholder={movie2}
        ></input>
        <input
          type="text"
          onChange={update}
          name="movie3"
          placeholder={movie3}
        ></input>
      </div>
      <button
        onClick={() => {
          toggleEdit();
          saveChanges();
          renderEdit();
        }}
      >
        Update User
      </button>
      <button onClick={toggleEdit}>Cancel</button>
    </div>
  );
};

export default EditUser;
