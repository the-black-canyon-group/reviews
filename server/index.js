const express = require('express')
const server = express()
const port = 3001


server.get('/reviews', (req, res) => {
  Review.findAll()
    .then((reviews) => {
      res.json(reviews)
    })
});

server.listen(port, () => console.log(`SERVER LISTENING ON ${port}!`))