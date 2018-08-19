var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	userId: String,
	username: {type: String, unique: true, required: true},
	email: {type: String, match: /.+\@.+\..+/, unique: true, required: true},
	address: String,
	phone: String,
	dateJoined: { type: Date, default: Date.now }
});

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
