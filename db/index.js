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
Review.belongsTo(Host);
Host.hasMany(Reviews);






// //SYNC EACH TABLE TO DATABASE
Review.sync({ force: true })
  .then(() => {
    // for (var i = 0; i < 100; i += 1) {
    //   generateReview()
    // }
  })
  .catch((err) => {
    console.log(err)
  });


Host.sync({ force: true })
  .then(() => {
    // for (var j = 0; j < 20; j += 1) {
    //   generateResponse()
    // }
  })
  .catch((err) => {
    console.log(err)
  });

// EXPORT EACH TABLE
module.exports = {
  Review: Model.Review,
  Host: Model.Host
}



