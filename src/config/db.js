const db = require("slonik");
const {DB_URL} = require("../misc/constants");

//postgresql://user:1234@localhost:5432/db
module.exports = db.createPool(DB_URL);
