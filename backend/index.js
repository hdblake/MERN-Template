// MAKE SURE TO MOVE MONGO_URI CONNECTION AND PORT TO SEPARATE .env FILE WITH CORRECT CONNECTION
// MONGO_URI=mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// PORT=3080

const express = require("express");
const app = express();
const port = process.env.PORT || 3080;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", require("./routes"));

mongoose.connect(process.env.MONGO_URI).then(() => {
	app.listen(port, () => {
		console.log(`Server listening on port: ${port}!`);
	});
});
