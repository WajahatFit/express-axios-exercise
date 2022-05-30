const express = require('express');
const axios = require('axios');

const app = express();

// Iteration 1
app.get('/pikachu', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(function (response) {
    res.json(response.data)
    console.log(response);
  })
  .catch(function(error) {
    console.log(error)
  })

})

// Iteration 2
app.get('/rockets', async (req, res, next) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets')
    res.json(response.data)
  } catch (error) {
    console.error(error)
  }
})

// Iteration 3
app.get('/randomuser', async (req, res, next) => {

  try {
    const response = axios.get('https://randomuser.me/api/')
    res.json(response.data)
  } catch (error) {
    console.error()
  }

})

// Iteration 4
app.get('/Home',(req, res, next) => {
  res.send('<a href="/randomuser">Random User</a> <br> <a href="/pikachu">pikachu</a> <br><a href="/rockets">Rockets</a>')
})

app.listen(3000, () => { console.log('Server running on port 3000 🛫') })