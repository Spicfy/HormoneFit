const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/api", async (req, res) => {
	console.log(res.body);
});

app.listen(4242, () => console.log("Running on port 4242"));
