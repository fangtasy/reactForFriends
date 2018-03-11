var mongoose = require('mongoose');
var InfoSchema = new mongoose.Schema({
	id: Number,
	nickname: String,
	avatar:String,
	cname: String,
	menpai: String,
	achievement: Number,
	qiyu: Array,
	zhuangfen: Number,
	tag: Array,
	geqian: String,
	posts: Array
}
);

module.exports = mongoose.model('info', InfoSchema);