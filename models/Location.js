var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	title: {type: String, required: true},
  logo: String,
  price_range: {type: String, default: '$'},
  hours: {
    doors_open: {type: String, default: '10:30'},
    doors_close: {type: String, default: '21:00'}
  },
  cuisine: {
    category: String,
    subcategory: String
  },
  delivery: {
    description: {type: String, default: 'Free delivery'},
    free_over: {type: Number, default: 0.00},
    charge: {type: Number, default: 0.00},
		eta: String
  },
	menu: {
		show_preview: {type: Boolean, default: false},
		categories: [
			{
				type: Schema.Types.ObjectId,
				ref: "Category"
			}
		],
		items: [
			{
				type: Schema.Types.ObjectId,
				ref: "MenuItem"
			}
		]
	},
	reviews: [
      {
	      type: Schema.Types.ObjectId,
	      ref: "Review"
	    }
	],
  dateAdded: { type: Date, default: Date.now },
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
