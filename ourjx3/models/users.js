var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	id: String,
	pwd: String
	}
);

module.exports = mongoose.model('user', UserSchema);