const express = require('express');
const axios = require('axios');
require("dotenv").config()
const cors = require('cors');
const app = express();

const controlWorkout = require('./controllers/workout')

const {WORKOUT_API_KEY} = process.env
// console.log(typeof(WORKOUT_API_KEY) )

app.use(cors())

app.get("/:equipment", (req, result) => {
  axios.get(`https://exercisedb.p.rapidapi.com/exercises/equipment/${req.params.equipment}`,
  {
    headers: {
      "X-RapidAPI-Key": WORKOUT_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  }).then((res) => {
    // console.log(res)
    return result.status(200).send(res.data)
  })
})

// app.get(`${options}/bodyPart/back`, controlWorkout.getBack)


const port = 5000;

app.listen(port, () => console.log(`Listening in, on port ${port}`))