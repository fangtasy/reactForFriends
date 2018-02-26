var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	id: Number,
	pwd: String
	}
);

module.exports = mongoose.model('user', UserSchema);