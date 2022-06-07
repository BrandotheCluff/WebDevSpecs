import React from "react";
import "../App.css"

const InfoCard = ({ data, length, index }) => {


  return (
    <div className="Card">
      <h2 className="Counter">
        {index}/{length}
      </h2>
      <h2 className="Username">{data.name.first} {data.name.last}</h2>
      
      <div className="About">
        <div className="Basic">
        <h3>From:</h3> <p>{data.city}, {data.country}</p>
        
        <h3>Job Title:</h3> <p>{data.title}</p>
        <h3>Employer:</h3> <p>{data.employer}</p>
        </div>
        <h3>Favorite Movies:</h3>
        <ol className="Movielist"> 
          <li>{data.favoriteMovies[0]}</li>
          <li>{data.favoriteMovies[1]}</li>
          <li>{data.favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
  );
};

export default InfoCard;
