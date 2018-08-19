var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	title: String,
  note: String,
	display_order: Number
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
