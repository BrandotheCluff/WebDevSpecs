import React, {useState} from "react";
import data from '../data'


const NewUser = ({openForm}) => {

const [first, setFirst] = useState('')
const [last, setLast] = useState('')
const [city, setCity] = useState('')
const [country, setCountry] = useState('')
const [employer, setEmployer] = useState('')
const [title, setTitle] = useState('')
const [movie1, setMovie1] = useState('')
const [movie2, setMovie2] = useState('')
const [movie3, setMovie3] = useState('')

    const addNew = (e) => {
        switch(e.target.name){
            case 'first':
                setFirst(e.target.value)
                break;
            case 'last':
                setLast(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'country':
                setCountry(e.target.value)
                break;
            case 'employer':
                setEmployer(e.target.value)
                break;
            case 'title':
                setTitle(e.target.value)
                break;
            case 'movie1':
                setMovie1(e.target.value)
                break;
            case 'movie2':
                setMovie2(e.target.value)
                break;
            case 'movie3':
                setMovie3(e.target.value)
        }
}

const addUser = () => {
    alert('New User Added')
    data.push({
        id: data.length+1,
        name: {
            first, 
            last
        },
        city,
        country,
        title,
        employer,
        favoriteMovies: [movie1, movie2, movie3]
    })
}
   
 
    return (
      <div>
        <form>
          <h3>Enter your information here!</h3>
          <input type="text" placeholder="First Name" name='first' onChange={addNew}></input>
          <input type="text" placeholder="Last Name" name='last' onChange={addNew}></input>
          <input type="text" placeholder="City" name='city' onChange={addNew}></input>
          <input type="text" placeholder="Country" name='country' onChange={addNew}></input>
          <input type="text" placeholder="Job Title" name='title' onChange={addNew}></input>
          <input type="text" placeholder="Employer" name='employer' onChange={addNew}></input>
          <h3>Gotta know those favorite movies player!</h3>
          <input type="text" placeholder="Movie 1" name='movie1' onChange={addNew}></input>
          <input type="text" placeholder="Movie 2" name='movie2' onChange={addNew}></input>
          <input type="text" placeholder="Movie 3" name='movie3' onChange={addNew}></input>
          <button onClick={() => {openForm(); addUser()}} id='beelzebub'>Add</button>
          <button onClick={!openForm}>Cancel</button>
        </form>
      </div>
    )
  }

  export default NewUser