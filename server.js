const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const app = express();
const session = require("express-session");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Morgan logger
app.use(logger("dev"));

// Data parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Sessions
app.use(session({
    secret: 'mynock bluz',
    resave: true,
    saveUninitialized: true,
})); // session secret

// Static Public Middleware
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Routes Middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local database
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/foodDeliveryDB", 
  { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB &
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('Connection to database is active');
});

app.listen(PORT, function() {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
