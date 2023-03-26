const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "VS Code is super neat and I love all the colors",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I can ride MySQL with no handlebars",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "I'm glad I got a ThinkPad because it helps me stay focused while coding",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
