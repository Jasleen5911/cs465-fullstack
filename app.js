const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();
const port = 3000;

require("./app_server/db");

const apiTripsRouter = require("./app_api/routes/trips"); 
const pageTripsRouter = require("./routes/trips");         
const usersRouter = require("./routes/users");
const travelRoutes = require("./app_server/routes/travel");

// View engine setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/trips", pageTripsRouter);
app.use("/api/trips", apiTripsRouter);
app.use("/users", usersRouter);
app.use("/", travelRoutes);


app.get("/about", (req, res) => {
  res.render("about", { title: "About Us", description: "This is the about page." });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us", description: "This is the contact page." });
});
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Catch 404
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
