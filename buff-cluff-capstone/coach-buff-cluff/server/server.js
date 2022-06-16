const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const controlWorkout = require('./controllers/workout')

let baseUrl = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
    headers: {
        'X-RapidAPI-Key': 'e8565680e9msh721a60b51d1533cp184228jsn2a4a6a37a7bc',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    }

app.get(`${baseUrl}/bodyPart/back`, controlWorkout.getBack)


const port = 5000;

app.listen(port, () => console.log(`Listening in, on port ${port}`))