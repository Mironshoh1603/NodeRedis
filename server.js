const { default: axios } = require('axios');
let express = require('express');

var starwarsURL = 'https://swapi.dev/api/';

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Welcome to Redis Cache </h1>');
});

app.get('/starwars/:search', async (req, res) => {
  let search = req.params.search;

  console.log(starwarsURL + search,"_url");
  let data = await axios(starwarsURL + search);

  res.json({ data: data.data, info: 'data from 3rd party API' });
});

app.listen(3000, () => {
  console.log('server is live on port 3000')});