const express = require("express");
const route = require("./routes/task");
const bodyParser = require("body-parser");
const { connect } = require("http2");
const connectDB = require("./db/connect");
const app = express();
require("./db/connect");
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

