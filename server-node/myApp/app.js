var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var recruiterRouter = require('./src/routes/recruiterRouter');
var talentRouter = require('./src/routes/talentRouter');
var jobOfferRouter = require('./src/routes/JobOfferRouter');
var señorityRouter = require('./src/routes/seniorityRouter');
var educationRouter = require('./src/routes/educationRouter');
var experienceRouter = require('./src/routes/experienceRouter');
var specialityRouter = require('./src/routes/specialityRouter');
var skillsRouter = require('./src/routes/skillRouter');
var languageRouter = require('./src/routes/languageRouter');
var remoteRouter = require('./src/routes/remoteRouter');
var scheduleRouter = require('./src/routes/scheduleRouter');

const PORT = process.env.PORT || 3002;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recruiters', recruiterRouter);
app.use('/talents', talentRouter);
app.use('/jobOffers', jobOfferRouter);
app.use('/Seniorities', señorityRouter);
app.use('/education', educationRouter);
app.use('/experience', experienceRouter);
app.use('/speciality', specialityRouter);
app.use('/skills', skillsRouter);
app.use('/language', languageRouter);
app.use('/remotes', remoteRouter);
app.use('/schedules', scheduleRouter);

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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
