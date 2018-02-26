var mongoose = require('mongoose');
var OuhuangSchema = new mongoose.Schema({
	qiyu: String,
	name: String,
	date: Date,
	}
);

module.exports = mongoose.model('ouhuang', OuhuangSchema);