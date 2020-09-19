const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use(express.static('./client/build'))

// app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

// Connect to Mongo_DB

const URI = process.env.MongoDB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const detailRouter = require("./routes/details");

app.use("/details/", detailRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
