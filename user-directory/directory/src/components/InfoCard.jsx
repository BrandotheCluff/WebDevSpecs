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
        <h3>From: <span className="UserInfo">{data.city}, {data.country}</span></h3> 
        
        <h3>Job Title: <span className="UserInfo">{data.title}</span></h3> 
        <h3>Employer: <span className="UserInfo">{data.employer}</span></h3> 
        </div>
        <ol> 
        <h3 className="MovieSec">Favorite Movies:
        <li className="Movielist">{data.favoriteMovies[0]}</li>
          <li className="Movielist">{data.favoriteMovies[1]}</li>
          <li className="Movielist">{data.favoriteMovies[2]}</li>
        </h3>
          
        </ol>
      </div>
    </div>
  );
};

export default InfoCard;
