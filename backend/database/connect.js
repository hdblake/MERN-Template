// MAKE SURE TO MOVE MONGO_URI CONNECTION AND PORT TO SEPARATE .env FILE WITH CORRECT CONNECTION
// MONGO_URI=mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// PORT=3080

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

let db;

const initDb = (callback) => {
	if (db) {
		console.log("Database already initialized");
		return callback(null, db);
	}
	mongoose
		.connect(process.env.MONGO_URI)
		.then((client) => {
			db = client;
			callback(null, db);
		})
		.catch((err) => {
			callback(err);
		});
};

const getDb = () => {
	if (!db) {
		throw Error("Database is not intialized");
	}
	return db;
};

module.exports = {
	initDb,
	getDb,
};
