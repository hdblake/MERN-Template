const express = require("express");
const app = express();
const port = process.env.PORT || 3080;
const mongoDb = require("./db/connect");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", require("./routes"));

mongoDb.initDb((err, mongoDb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port, () => {
			console.log(`Connected to Db. Listening on port: ${port}`);
		});
	}
});
