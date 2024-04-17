const mysql2 = require("mysql2");
const Schema = mysql2.Schema;

const UserSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  identity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mysql2.model("")