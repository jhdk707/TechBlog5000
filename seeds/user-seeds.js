const { User } = require("../models");

const userData = [
  {
    username: "Jesse",
    password: "test369mcv",
  },
  {
    username: "Jenn707",
    password: "876gonuts",
  },
  {
    username: "Larrietta",
    password: "ferrarigofast",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
