const Sequelize = require('sequelize');
const faker = require('faker');
const Review = require('../models').Review;
const sequelize = new Sequelize('mysql://root@localhost:3306/airbnb');


const generateRespnseReviews = () => {
  return ({
    first_name: faker.name.firstName(),
    profile_picture: faker.image.avatar(),
    localized_date: new Date(faker.date.past()),
    review: faker.lorem.text(),
    accuracy: ((faker.random.number() % 5) + 1.0),
    communication: ((faker.random.number() % 5) + 1.0),
    cleanliness: ((faker.random.number() % 5) + 1.0),
    location: ((faker.random.number() % 5) + 1.0),
    checkin: ((faker.random.number() % 5) + 1.0),
    value: ((faker.random.number() % 5) + 1.0),
    response_first_name: 'Micheal',
    response_profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg',
    response_comment: faker.lorem.text(),
    response_localized_date: new Date(faker.date.recent())
  })
};

const generateReview = () => {
  return({
    first_name: faker.name.firstName(),
    profile_picture: faker.image.avatar(),
    localized_date: new Date(faker.date.past()),
    review: faker.lorem.text(),
    accuracy: ((faker.random.number() % 5) + 1.0),
    communication: ((faker.random.number() % 5) + 1.0),
    cleanliness: ((faker.random.number() % 5) + 1.0),
    location: ((faker.random.number() % 5) + 1.0),
    checkin: ((faker.random.number() % 5) + 1.0),
    value: ((faker.random.number() % 5) + 1.0)
  })
};


Review.sync({ force: true })
.then (() => {
  Review.findAll()
    .then((reviews) => {
      // REVIEWS W/O RESPONSES
      if (reviews.length === 0) {
        for (var i = 0; i < 50; i += 1) {
          const review = generateReview()
          // review.response = generateResponse()
          Review.create(review)
        }

        // REVIEWS W/ RESPONSES
        for (var i = 0; i < 50; i += 1) {
          const review = generateRespnseReviews()
          Review.create(review)
        }
      }

    })
    .catch((err) => {
      console.log(err)
    });
})






