const Review = require('../db').Review;
//all routes to db: ROUTER 
module.exports = {
  Review: {
    get: (req, res) =>  {
      Review.findAll()
      .then(function (reviews) {
        res.json(reviews)
      });
    }
  };

};

//find one where text ===> Searched item


//CREATE A NEW REVIEW
//DELETE A SPECIFIC USER
// UPDATE A NEW USER