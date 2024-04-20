const mysql2 = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql", // 或者其他数据库类型，如postgres、sqlite等
});

const UserSchema = new Sequelize({
  id: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },≈
  identity: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//同步数据库
async () => {
  await sequelize.sync({ force: true });
  console.log("数据库同步完成");
};

module.exports = { User, sequelize };
