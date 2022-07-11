const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/api");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

//const mongoURI = "";
//const mongoURI = "mongodb://localhost:27017/Romani";
const mongoURI =
  "mongodb+srv://romani:Katalambano90@romani.9vonhop.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  mongoURI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      process.exit(1);
      console.log("Could not connect to the database");
    } else console.log("Database is connected");
  }
);

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(authRoute);

app.listen(port, () => console.log(`You are listening to port ${port}`));
