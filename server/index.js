const express = require('express');
const path = require('path');
const server = express();
const port = process.env.PORT || 3001;
const Review = require('../models').Review;
const Request = require('request')
const bodyParser = require('body-parser')
const morgan = require('morgan');


server.use(express.static(path.join(__dirname, '../../reviews-frontend/public')))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(morgan('combined'))




//intial get to serve html
server.get('/', (req, res) => {
  res.sendStatus(200)
})

server.get('/reviews', (req, res) => {
  Review.findAll()
    .then((reviews) => {
      res.json(reviews)
    });
});


server.listen(port, () => console.log(`SERVER LISTENING ON ${port}!`))