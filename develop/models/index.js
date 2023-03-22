// import models
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// define association
//User has many post
User.hasMany(Post, {
  foreignKey: "user_id",
});
//post belong to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
//user has many comment
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//comment belong to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//post has many comment
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

//comment belong to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

//export models
module.exports = { User, Post, Comment };
