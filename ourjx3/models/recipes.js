var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
	name: String
	}
);

module.exports = mongoose.model('recipes', RecipeSchema);