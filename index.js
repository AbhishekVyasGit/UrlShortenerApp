const express = require("express");
const path = require("path");
const  connect = require("./configs/db");
const urlController = require("./controllers/url-controller");
const staticController = require("./controllers/static-controller");
const PORT = 8008;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlController);
app.use("/", staticController);

app.listen(PORT, async () => {
    try {
      await connect();
      console.log("listening to port 8008...");
    } catch (error) {
      console.log("error:", error);
    }
  });
