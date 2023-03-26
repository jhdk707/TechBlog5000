const { User } = require("../models");

const userData = [
  {
    username: "Jesse",
    email: "jesse@test.com",
    password: "test369mcv",
  },
  {
    username: "Jenn707",
    email: "jenn@salesteam.com",
    password: "876gonuts",
  },
  {
    username: "Larrietta",
    email: "ljones99@foobar.com",
    password: "ferrarigofast",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
