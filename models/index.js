const Sequelize = require('sequelize');
//CONNECTION TO DB: NEW INSTANCE OF SEQUELIZE
const sequelize = new Sequelize('mysql://root@localhost:3306/airbnb');
const Model = Sequelize.Model;
const mysql = require('mysql2');


class Review extends Sequelize.Model { }
Review.init({
  // attributes
  first_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  profile_picture: Sequelize.STRING,
  localized_date: Sequelize.DATE,
  review: Sequelize.TEXT,
  accuracy: Sequelize.INTEGER,
  communication: Sequelize.INTEGER,
  cleanliness: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  checkin: Sequelize.INTEGER,
  value: Sequelize.INTEGER,
  response_first_name: Sequelize.TEXT,
  response_comment: Sequelize.TEXT,
  response_profile_picture: Sequelize.STRING,
  response_localized_date: Sequelize.DATE
}, { sequelize, modelName: 'review' });



module.exports = {
  Review: Review
}
