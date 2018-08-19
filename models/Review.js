var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	locationID: String,
	customerID: String,
	rating: {type: Number, default: 0},
  review: String,
	timestamp: { type: Date, default: Date.now }
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
