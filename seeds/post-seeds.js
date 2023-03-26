const { Post } = require("../models");

const postData = [
  {
    title: "VS CODE",
    content: "Extenstion, File Explorer, Formatting, Prettier, Colored tags.",
    user_id: 1,
  },
  {
    title: "MySQL Database code",
    content: "MySQL makes it easy to manage databases.",
    user_id: 2,
  },
  {
    title: "Laptops for Coding Productivity",
    content:
      "Lenovo ThinkPad T16 laptop is lightweight, sturdy for working remotely, powerful, secure and discreet in appearance.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
