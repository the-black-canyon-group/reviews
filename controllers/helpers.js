// MOVE ALL SEED FUNCTIONS HERE


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

