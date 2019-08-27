const Review = require('../models').Review;
//ROUTER: DB ==> SERVER

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