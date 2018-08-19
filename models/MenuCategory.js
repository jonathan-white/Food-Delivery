var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MenuCategorySchema = new Schema({
	locationID: String,
	title: String,
  note: String,
	display_order: Number,
	dateAdded: { type: Date, default: Date.now },
});

var MenuCategory = mongoose.model('MenuCategory', MenuCategorySchema);

module.exports = MenuCategory;
