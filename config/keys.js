require("dotenv").config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
console.log("88888888888888888888888888888888888888");
console.log(username);
console.log("99999999999999999999999999999999999");
module.exports = {
  mongoURI:
    "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster0.lxkiz.mongodb.net/mern_shopping?retryWrites=true&w=majority",
};
