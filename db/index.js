const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const mysql = require('mysql2');
const faker = require('faker');
//CONNECTION TO DB: NEW INSTANCE OF SEQUELIZE
const sequelize = new Sequelize('mysql://root@localhost:3306/airbnb');


class Review extends Sequelize.Model {}
Review.init({
  // attributes
  reviewer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  profile_picture:Sequelize.STRING,
  loacalized_date: Sequelize.STRING,
  review: Sequelize.TEXT,
  accuracy: Sequelize.INTEGER,
  communication: Sequelize.INTEGER,
  cleanliness: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  checkin: Sequelize.INTEGER,
  value: Sequelize.INTEGER
}, {sequelize});


class Host extends Sequelize.Model { }
Host.init({
    firstName: Sequelize.TEXT,
    comment: Sequelize.TEXT,
    profile_picture: Sequelize.STRING,
    loacalized_date: Sequelize.TEXT,
    review_id: {
      type: Sequelize.INTEGER,
      references: 'Review',
      referencesKey: 'id'
    },
}, {sequelize});


//BUILD ASSOCIATIONS
// Review.belongsTo(Reviewee);
// Reviewee.hasMany(Review);


const generateReview = () => {
  Review.create({
    first_name: faker.name.firstName(),
    profile_picture: faker.image.avatar(),
    localized_date: faker.date.past(),
    reviewer: faker.lorem.text(),
    accuracy: ((faker.random.number() % 5) + 1.0),
    communication: ((faker.random.number() % 5) + 1.0),
    cleanliness: ((faker.random.number() % 5) + 1.0),
    location: ((faker.random.number() % 5) + 1.0),
    checkin: ((faker.random.number() % 5) + 1.0),
    value: ((faker.random.number() % 5) + 1.0)
  })
};

const generateResponse = () => {
  Host.create({
    first_name: 'Micheal',
    profile_picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg',
    comment: faker.lorem.text(),
    localized_date: faker.date.recent(),
    review_id: ((faker.random.number() % 100) + 1.0)
  })
};


//SYNC EACH TABLE TO DATABASE
Review.sync({ force: true })
  .then(() => {
    for (var i = 0; i < 100; i += 1) {
      generateReview()
    }
  })
  .catch((err) => {
    console.log(err)
  });


Host.sync({ force: true })
  .then(() => {
    for (var j = 0; j < 20; j += 1) {
      generateResponse()
    }
  })
  .catch((err) => {
    console.log(err)
  });

// EXPORT EACH TABLE
module.exports = {
  Review: Model.Review,
  Host: Model.Host
}



