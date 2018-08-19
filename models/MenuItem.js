var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
	locationID: String,
	title: String,
  img: String,
  price: {type: Number, default: 0.00},
  category: String,
  popular: Boolean,
	showcase_order: Number,
	dateAdded: { type: Date, default: Date.now },
});

var MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
