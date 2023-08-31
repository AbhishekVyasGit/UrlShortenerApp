const express = require("express");
const path = require("path");
const  connect = require("./configs/db");
const urlController = require("./controllers/url-controller");
const staticController = require("./controllers/static-controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlController);
app.use("/", staticController);

app.listen(8000, async () => {
    try {
      await connect();
      console.log("listening to port 8000...");
    } catch (error) {
      console.log("error:", error);
    }
  });
