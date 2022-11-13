const express = require("express"); // express 미들웨어
const cors = require("cors"); // cors 미들웨어
const mongoose = require("mongoose"); // mongoose
require("dotenv").config(); // 환경변수를 위한 dotenv

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // mongoDB Connect 정보
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});