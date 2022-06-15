const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const port = 3000;

let options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises`,
    headers: {
        'X-RapidAPI-Key': 'e8565680e9msh721a60b51d1533cp184228jsn2a4a6a37a7bc',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

app.get('/bodyPartList', (req, res) => {
    request(options, function(error, response, body) {
        if(!error && response.status == 200) {
            res.send(body);
        }
    })
});





app.listen(port, () => console.log(`Listening in on por ${port}`))