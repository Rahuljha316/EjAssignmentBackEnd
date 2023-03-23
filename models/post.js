const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
  }
);

console.log(Post === sequelize.models.Post);

module.exports = Post;