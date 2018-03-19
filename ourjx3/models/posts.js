var mongoose = require('mongoose');
var Posts = new mongoose.Schema({
	id: Number,
	name: String,
	title:String,
	content:String,
	date: Date,
	reviews:Array
}
);

module.exports = mongoose.model('posts', Posts);