var createError = require("http-errors");
var express = require("express");
var path = require("path");
const fs = require("fs");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const loadRoutes = require("./routes/routeLoader");
// const bodyParser = require("body-parser");

var app = express();

// 视图目录设置
app.set("views", path.join(__dirname, "views"));
// 设置视图引擎
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json);

app.use(express.static(path.join(__dirname, "public")));

// 加载并挂载路由
loadRoutes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
